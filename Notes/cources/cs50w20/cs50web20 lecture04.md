



        <div class="container-fluid">

            <div class="row">

                <aside class="col-md">

                    <header>
# [CS50’s Web Programming with Python and JavaScript](../..)

OpenCourseWare


[Brian Yu](https://brianyu.me)  
&#10;[brian@cs.harvard.edu](mailto:brian@cs.harvard.edu)


[David J. Malan](https://cs.harvard.edu/malan/)  
&#10;[malan@harvard.edu](mailto:malan@harvard.edu)  
&#10;[<i class="fab fa-facebook-f"></i>](https://www.facebook.com/dmalan)[<i class="fab fa-github"></i>](https://github.com/dmalan)[<i class="fab fa-instagram"></i>](https://www.instagram.com/davidjmalan/)[<i class="fab fa-linkedin"></i>](https://www.linkedin.com/in/malan/)[<i class="fab fa-quora"></i>](https://www.quora.com/profile/David-J-Malan)[<i class="fab fa-reddit-alien"></i>](https://www.reddit.com/user/davidjmalan)[<i class="fab fa-twitter"></i>](https://twitter.com/davidjmalan)

</header>



                    <button aria-controls="nav" aria-expanded="false" class="btn btn-sm collapsed d-md-none" data-target="aside > nav" data-toggle="collapse">
                        Menu
                    </button>

                    <nav class="collapse d-md-block" id="nav">
- - -



1. [HTML, CSS](../../weeks/0/)

1. [Git](../../weeks/1/)

1. [Python](../../weeks/2/)

1. [Django](../../weeks/3/)

1. [SQL, Models, and Migrations](../../weeks/4/)

1. [JavaScript](../../weeks/5/)

1. [User Interfaces](../../weeks/6/)

1. [Testing, CI/CD](../../weeks/7/)

1. [Scalability and Security](../../weeks/8/)


- - -



- [CS50 Certificate](../../certificate/)

- [FAQs](../../faqs/)


- - -



- [Ed Discussion](https://cs50.harvard.edu/web/ed) for Q&amp;A

- [Quick Start Guide](https://us.edstem.org/quickstart/ed-discussion.pdf)


- - -



- [edX](https://cs50.edx.org/web)

- [iTunes U](https://itunes.apple.com/us/course/id1505432709)

- [YouTube](https://www.youtube.com/playlist?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu)


- - -



- [Changelog](https://cs50.noticeable.io/)

- [Status Page](https://cs50.statuspage.io/)


- - -



-

    [Communities](../../communities/)





- [Discord](https://discord.gg/cs50)

- [Facebook Group](https://www.facebook.com/groups/cs50/)

- [Facebook Page](https://www.facebook.com/cs50/)

- [GitHub](https://github.com/cs50)

- [Gitter](https://gitter.im/cs50/x)

- [Instagram](https://instagram.com/cs50)

- [LinkedIn Group](https://www.linkedin.com/groups/7437240/)

- [LinkedIn Page](https://www.linkedin.com/school/CS50/)

- [Quora](https://www.quora.com/topic/CS50)

- [Slack](https://cs50.edx.org/slack)

- [Snapchat](https://www.snapchat.com/add/cs50)

- [Twitter](https://twitter.com/cs50)

- [YouTube](http://www.youtube.com/subscription_center?add_user=cs50tv)


- - -

[![Harvard Shop](https://i.imgur.com/GGMdcKt.png)](https://cs50.harvardshop.com/)

- - -

[<i class="fab fa-creative-commons mr-1"></i>License](../../license/)

</nav>

                    <footer></footer>

                </aside>

                <main class="col-md markdown-body">

                    # Lecture 4


  - [Introduction](#introduction)
  - [SQL](#sql)    
                  - [Databases](#databases)
                  - [Column Types](#column-types)


  - [Tables](#tables)
  - [SELECT](#select)    
                  - [Working with SQL in the Terminal](#working-with-sql-in-the-terminal)
                  - [Functions](#functions)
                  - [UPDATE](#update)
                  - [DELETE](#delete)
                  - [Other Clauses](#other-clauses)


  - [Joining Tables](#joining-tables)    
                  - [JOIN Query](#join-query)
                  - [Indexing:](#indexing)
                  - [SQL Vulnerabilities](#sql-vulnerabilities)


  - [Django Models](#django-models)
  - [Migrations](#migrations)
  - [Shell](#shell)    
                  - [Starting our application](#starting-our-application)


  - [Django Admin](#django-admin)
  - [Many-to-Many Relationships](#many-to-many-relationships)
  - [Users](#users)


## Introduction


  - So far, we’ve discussed how to build simple web pages using HTML and CSS, and how to use Git and GitHub in order to keep track of changes to our code and collaborate with others. We also familiarized ourselves with the Python programming language, and started using Django to create web applications.
  - Today, we’ll learn about using SQL and Django models to efficiently store and access data.


## SQL

: [SQL](https://www.w3schools.com/sql/), or Structured Query Language, is a programming language that allows us to update and query databases.

![SQL logo](cs50.web.2020_files/lecture04/sql.png)

### Databases

Before we get into how to use the SQL language, we should discuss how our data is stored. When using SQL, we’ll work with a [relational database](https://www.oracle.com/database/what-is-a-relational-database/#:~:text=A%20relational%20database%20is%20a,of%20representing%20data%20in%20tables.) where we can find all of our data stored in a number of [tables](https://www.essentialsql.com/what-is-a-database-table/). Each of these tables is made up of a set number of columns and a flexible number of rows.

To illustrate how to work with SQL, we’ll use the example of a website for an airline used to keep track of flights and passengers. In the following table, we see that we’re keeping track of a number of flights, each of which has an `origin`, a `destination`, and a `duration`.

![Flights 0](cs50.web.2020_files/lecture04/flights0.png)

There are several different relational database management systems that are commonly used to store information, and that can easily interact with SQL commands:

  - [MySQL](https://www.mysql.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [SQLite](https://www.sqlite.org/index.html)
  - …


The first two, MySQL and PostgreSQL, are heavier-duty database management systems that are typically run on servers separate from those running a website. SQLite, on the other hand, is a lighter-weight system that can store all of its data in a single file. We’ll be using SQLite throughout this course, as it is the default system used by Django.

### Column Types

Just as we worked with several different variable types in Python, SQLite has [types](https://www.sqlite.org/datatype3.html) that represent different forms of information. Other management systems may have different data types, but all are fairly similar to those of SQLite:

  - `TEXT`: For strings of text (Ex. a person’s name)
  - `NUMERIC`: A more general form of numeric data (Ex. A date or boolean value)
  - `INTEGER`: Any non-decimal number (Ex. a person’s age)
  - `REAL`: Any real number (Ex. a person’s weight)
  - `BLOB` (Binary Large Object): Any other binary data that we may want to store in our database (Ex. an image)


## Tables

Now, to actually get started with using SQL to interact with a database, let’s begin by creating a new table. The [command to create a new table](https://www.w3schools.com/sql/sql_create_table.asp) looks something like this:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">CREATE</span> <span class="k">TABLE</span> <span class="n">flights</span><span class="p">(</span>
    <span class="n">id</span> <span class="nb">INTEGER</span> <span class="k">PRIMARY</span> <span class="k">KEY</span> <span class="n">AUTOINCREMENT</span><span class="p">,</span>
    <span class="n">origin</span> <span class="nb">TEXT</span> <span class="k">NOT</span> <span class="k">NULL</span><span class="p">,</span>
    <span class="n">destination</span> <span class="nb">TEXT</span> <span class="k">NOT</span> <span class="k">NULL</span><span class="p">,</span>
    <span class="n">duration</span> <span class="nb">INTEGER</span> <span class="k">NOT</span> <span class="k">NULL</span>
<span class="p">);</span>
</code></pre></div></div>

In the above command, we’re creating a new table that we’ve decided to call `flights`, and we’ve added four columns to this table:

  1. `id`: It is often helpful to have an number that allows us to uniquely identify each row in a table. Here we have specified that `id` is an integer, and also that it is our [primary key](https://www.w3schools.com/sql/sql_primarykey.ASP), meaning it is our unique identifier. We have additionally specified that it will `AUTOINCREMENT`, which means we will not have to provide an id every time we add to the table because it will be done automatically.
  1. `origin`: Here we’ve specified that this will be a text field, and by writing `NOT NULL` we have required that it have a value.
  1. `destination`: Again we’ve specified that this will be a text field and prevented it from being null.
  1. `duration`: Again this value cannot be null, but this time it is represented by an integer rather than as text.


We just saw the `NOT NULL` and `PRIMARY KEY` constraint when making a column, but there are several other [constraints](https://www.tutorialspoint.com/sqlite/sqlite_constraints.htm) available to us:

  - `CHECK`: Makes sure certain constraints are met before allowing a row to be added/modified
  - `DEFAULT`: Provides a default value if no value is given
  - `NOT NULL`: Makes sure a value is provided
  - `PRIMARY KEY`: Indicates this is the primary way of searching for a row in the database
  - `UNIQUE`: Ensures that no two rows have the same value in that column.
  - …


Now that we’ve seen how to create a table, let’s look at how we can add rows to it. In SQL, we do this using the `INSERT` command:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">INSERT</span> <span class="k">INTO</span> <span class="n">flights</span>
    <span class="p">(</span><span class="n">origin</span><span class="p">,</span> <span class="n">destination</span><span class="p">,</span> <span class="n">duration</span><span class="p">)</span>
    <span class="k">VALUES</span> <span class="p">(</span><span class="nv">"New York"</span><span class="p">,</span> <span class="nv">"London"</span><span class="p">,</span> <span class="mi">415</span><span class="p">);</span>
</code></pre></div></div>

In the above command, we’ve specified the table name we wish to insert into, then provided a list of the column names we will be providing information on, and then specified the `VALUES` we would like to fill that row in the table, making sure the `VALUES` come in the same order as our corresponding list of columns. Note that we don’t need to provide a value for `id` because it is automatically incrementing.

## SELECT

Once a table has been populated with some rows, we’ll probably want a way to access data within that table. We do this using SQL’s [SELECT](https://www.w3schools.com/sql/sql_select.asp) query. The simplest `SELECT` query into our flights table might look something like this:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span><span class="p">;</span>
</code></pre></div></div>

The above command (*) retrieves all of the data from our flights table

![all](cs50.web.2020_files/lecture04/all.png)

It may be the case though that we don’t really need all of the columns from the database, just origin and destination. To access just these columns, we can replace the * with the column names we would like access to. The following query returns all of the origins and destinations.

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="n">origin</span><span class="p">,</span> <span class="n">destination</span> <span class="k">FROM</span> <span class="n">flights</span><span class="p">;</span>
</code></pre></div></div>

![Just two cols](cs50.web.2020_files/lecture04/flights1.png)

As our tables get larger and larger, we will also want to narrow down which rows our query returns. We do this by adding a [WHERE](https://www.w3schools.com/sql/sql_where.asp) followed by some condition. For example, the following command selects only row with an `id` of `3`:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">id</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span>
</code></pre></div></div>

![only one row](cs50.web.2020_files/lecture04/where0.png)

e can filter  by any column, not just `id`!

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">origin</span> <span class="o">=</span> <span class="nv">"New York"</span><span class="p">;</span>
</code></pre></div></div>

![Origin is New York](cs50.web.2020_files/lecture04/where1.png)

### Working with SQL in the Terminal

Now that we know some basic SQL commands, let’s test them out in the terminal! In order to work with SQLite on your computer, you must first [download SQLite](https://www.sqlite.org/download.html). (We won’t use it in lecture, but you can also [download DB Browser](https://sqlitebrowser.org/dl/) for a more user-friendly way to run SQL queries.)

We can start by creating a file for our database either by manually creating a new file, or running `touch flights.sql` in the terminal. Now, if we run `sqlite3 flights.sql` in the terminal, we’ll be brought to a SQLite prompt where we can run SQL commands:

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
<span class="c"># Entering into the SQLite Prompt</span>
<span class="o">(</span>base<span class="o">)</span> % sqlite3 flights.sql
SQLite version 3.26.0 2018-12-01 12:34:55
Enter <span class="s2">".help"</span> <span class="k">for </span>usage hints.

<span class="c"># Creating a new Table</span>
sqlite&gt; CREATE TABLE flights<span class="o">(</span>
   ...&gt;     <span class="nb">id </span>INTEGER PRIMARY KEY AUTOINCREMENT,
   ...&gt;     origin TEXT NOT NULL,
   ...&gt;     destination TEXT NOT NULL,
   ...&gt;     duration INTEGER NOT NULL
   ...&gt; <span class="o">)</span><span class="p">;</span>

<span class="c"># Listing all current tables (Just flights for now)</span>
sqlite&gt; .tables
flights

<span class="c"># Querying for everything within flights (Which is now empty)</span>
sqlite&gt; SELECT <span class="k">*</span> FROM flights<span class="p">;</span>

<span class="c"># Adding one flight</span>
sqlite&gt; INSERT INTO flights
   ...&gt;     <span class="o">(</span>origin, destination, duration<span class="o">)</span>
   ...&gt;     VALUES <span class="o">(</span><span class="s2">"New York"</span>, <span class="s2">"London"</span>, 415<span class="o">)</span><span class="p">;</span>

<span class="c"># Checking for new information, which we can now see</span>
sqlite&gt; SELECT <span class="k">*</span> FROM flights<span class="p">;</span>
1|New York|London|415

<span class="c"># Adding some more flights</span>
sqlite&gt; INSERT INTO flights <span class="o">(</span>origin, destination, duration<span class="o">)</span> VALUES <span class="o">(</span><span class="s2">"Shanghai"</span>, <span class="s2">"Paris"</span>, 760<span class="o">)</span><span class="p">;</span>
sqlite&gt; INSERT INTO flights <span class="o">(</span>origin, destination, duration<span class="o">)</span> VALUES <span class="o">(</span><span class="s2">"Istanbul"</span>, <span class="s2">"Tokyo"</span>, 700<span class="o">)</span><span class="p">;</span>
sqlite&gt; INSERT INTO flights <span class="o">(</span>origin, destination, duration<span class="o">)</span> VALUES <span class="o">(</span><span class="s2">"New York"</span>, <span class="s2">"Paris"</span>, 435<span class="o">)</span><span class="p">;</span>
sqlite&gt; INSERT INTO flights <span class="o">(</span>origin, destination, duration<span class="o">)</span> VALUES <span class="o">(</span><span class="s2">"Moscow"</span>, <span class="s2">"Paris"</span>, 245<span class="o">)</span><span class="p">;</span>
sqlite&gt; INSERT INTO flights <span class="o">(</span>origin, destination, duration<span class="o">)</span> VALUES <span class="o">(</span><span class="s2">"Lima"</span>, <span class="s2">"New York"</span>, 455<span class="o">)</span><span class="p">;</span>

<span class="c"># Querying this new information</span>
sqlite&gt; SELECT <span class="k">*</span> FROM flights<span class="p">;</span>
1|New York|London|415
2|Shanghai|Paris|760
3|Istanbul|Tokyo|700
4|New York|Paris|435
5|Moscow|Paris|245
6|Lima|New York|455

<span class="c"># Changing the settings to make output more readable</span>
sqlite&gt; .mode columns
sqlite&gt; .headers <span class="nb">yes</span>

<span class="c"># Querying all information again</span>
sqlite&gt; SELECT <span class="k">*</span> FROM flights<span class="p">;</span>
<span class="nb">id          </span>origin      destination  duration  
<span class="nt">----------</span>  <span class="nt">----------</span>  <span class="nt">-----------</span>  <span class="nt">----------</span>
1           New York    London       415       
2           Shanghai    Paris        760       
3           Istanbul    Tokyo        700       
4           New York    Paris        435       
5           Moscow      Paris        245       
6           Lima        New York     455    

<span class="c"># Searching for just those flights originating in New York   </span>
sqlite&gt; SELECT <span class="k">*</span> FROM flights WHERE origin <span class="o">=</span> <span class="s2">"New York"</span><span class="p">;</span>
<span class="nb">id          </span>origin      destination  duration  
<span class="nt">----------</span>  <span class="nt">----------</span>  <span class="nt">-----------</span>  <span class="nt">----------</span>
1           New York    London       415       
4           New York    Paris        435    
</code></pre></div></div>

We can also use more than just equality to filter out our flights. For integer and real values, we can use greater than or less than:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">duration</span> <span class="o">&gt;</span> <span class="mi">500</span><span class="p">;</span>
</code></pre></div></div>

![> 500](cs50.web.2020_files/lecture04/500.png)

nd we can also use other logic ([AND, OR](https://www.w3schools.com/sql/sql_and_or.asp)) like in Python:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">duration</span> <span class="o">&gt;</span> <span class="mi">500</span> <span class="k">AND</span> <span class="n">destination</span> <span class="o">=</span> <span class="nv">"Paris"</span><span class="p">;</span>
</code></pre></div></div>

![> 500 and paris](cs50.web.2020_files/lecture04/500andparis.png)

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">duration</span> <span class="o">&gt;</span> <span class="mi">500</span> <span class="k">OR</span> <span class="n">destination</span> <span class="o">=</span> <span class="nv">"Paris"</span><span class="p">;</span>
</code></pre></div></div>

![> 500 or paris](cs50.web.2020_files/lecture04/500orparis.png)

We can also use the keyword [IN](https://www.w3schools.com/sql/sql_in.asp) to see if a bit of data is one of several options:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">origin</span> <span class="k">IN</span> <span class="p">(</span><span class="nv">"New York"</span><span class="p">,</span> <span class="nv">"Lima"</span><span class="p">);</span>
</code></pre></div></div>

![in](cs50.web.2020_files/lecture04/in.png)

We can even use regular expressions to search words more broadly using the [LIKE](https://www.w3schools.com/sql/sql_like.asp) keyword. The below query finds all results with an `a` in the origin, by using `%` as a wildcard character.

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">origin</span> <span class="k">LIKE</span> <span class="nv">"%a%"</span><span class="p">;</span>
</code></pre></div></div>

![Origin has an 'a'](cs50.web.2020_files/lecture04/like.png)

### Functions

There are also a number of SQL functions we can apply to the results of a query. These can be useful if we don’t need all of the data returned by a query, but just some summary statistics of the data.

  - [AVERAGE](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
  - [COUNT](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
  - [MAX](https://www.w3schools.com/sql/sql_min_max.asp)
  - [MIN](https://www.w3schools.com/sql/sql_min_max.asp)
  - [SUM](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
  - …


### UPDATE

We’ve now seen how to add to and search tables, but we may also want to be able update rows of a table that already exist. We do this using the [UPDATE](https://www.w3schools.com/sql/sql_update.asp) command as shown below. As you may have guessed by reading this out loud, the command finds any flights that go from New York to London, and then sets their durations to 430.

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">UPDATE</span> <span class="n">flights</span>
    <span class="k">SET</span> <span class="n">duration</span> <span class="o">=</span> <span class="mi">430</span>
    <span class="k">WHERE</span> <span class="n">origin</span> <span class="o">=</span> <span class="nv">"New York"</span>
    <span class="k">AND</span> <span class="n">destination</span> <span class="o">=</span> <span class="nv">"London"</span><span class="p">;</span>
</code></pre></div></div>

### DELETE

We also might want the ability to delete rows from our database, and we can do this using the [DELETE](https://www.w3schools.com/sql/sql_delete.asp) command. The following code will remove all flights that land in Tokyo:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">DELETE</span> <span class="k">FROM</span> <span class="n">flights</span> <span class="k">WHERE</span> <span class="n">destination</span> <span class="o">=</span> <span class="nv">"Tokyo"</span><span class="p">;</span>
</code></pre></div></div>

### Other Clauses

There are a number of additional clauses we can use to control queries coming back to us

  - [LIMIT](https://www.w3schools.com/sql/sql_top.asp): Limits the number of results returned by a query
  - [ORDER BY](https://www.w3schools.com/sql/sql_orderby.asp): Orders the results based on a specified column
  - [GROUP BY](https://www.w3schools.com/sql/sql_groupby.asp): Groups results by a specified column
  - [HAVING](https://www.w3schools.com/sql/sql_having.asp): Allows for additional constraints based on the number of results


## Joining Tables

So far, we’ve only been working with one table at a time, but many databases in practice are populated by a number of tables that all relate to each other in some way. In our flights example, let’s imagine we also want to add an airport code to go with the city. The way our table is currently set up, we would have to add two more columns to go with each row. We would also be repeating information, as we would have to write in multiple places that city X is associated with code Y.

One way we can solve this problem is by deciding to have one table that keeps track of flights, and then another table keeping track of airports. The second table might look something like this

![Airport Table](cs50.web.2020_files/lecture04/airports.png)

Now we have a table relating codes and cities, rather than storing an entire city name in our flights table, it will save storage space if we’re able to just save the `id` of that airport. Therefore, we should rewrite the flights table accordingly. Since we’re using the `id` column of the airports table to populate `origin_id` and `destination_id`, we call those values [Foreign Keys](https://www.w3schools.com/sql/sql_foreignkey.asp)

![New Flights](cs50.web.2020_files/lecture04/flights2.png)

In addition to flights and airports, an airline might also want to store data about its passengers, like which flight each passenger will be on. Using the power of relational databases, we can add another table that stores first and last names, and a foreign key representing the flight they are on

![Simple Passengers Table](cs50.web.2020_files/lecture04/simple_pass.png)

We can do even better than this though, as the same person may be on more than one flight. To account for this, we can create a `people` table that stores first and last names, and a `passengers` table that pairs people with flights

![People](images/people.png

![Passengers](cs50.web.2020_files/lecture04/passengers.png)

ecause in this case a single person can be on many flights and a single flight can have many people, we call the relationship between `flights` and `people` a **Many to Many** relationship. The `passengers` table that connects the two is known as an **association table**.

### JOIN Query

Although our data is now more efficiently stored, it seems like it may be harder to query our data. Thankfully, SQL has a [JOIN](https://www.w3schools.com/sql/sql_join.asp) query where we can combine two tables for the purposes of another query.

For example, let’s say we want to find the origin, destination, and first name of every trip a passenger is taking. Also for simplicity in this table, we’re going to be using the unoptimized `passengers` table that includes the flight id, first name, and last name. The first part of this query looks fairly familiar:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="k">first</span><span class="p">,</span> <span class="n">origin</span><span class="p">,</span> <span class="n">destination</span>
<span class="k">FROM</span> <span class="p">...</span>
</code></pre></div></div>

But we run into a problem here because `first` is stored in the `passengers` table, while `origin` and `destination` are stored in the `flights` table. We solve this by joining the two tables using the fact that `flight_id` in the `passengers` table corresponds to `id` in the `flights` table:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="k">first</span><span class="p">,</span> <span class="n">origin</span><span class="p">,</span> <span class="n">destination</span>
<span class="k">FROM</span> <span class="n">flights</span> <span class="k">JOIN</span> <span class="n">passengers</span>
<span class="k">ON</span> <span class="n">passengers</span><span class="p">.</span><span class="n">flight_id</span> <span class="o">=</span> <span class="n">flights</span><span class="p">.</span><span class="n">id</span><span class="p">;</span>
</code></pre></div></div>

![Join blurry](cs50.web.2020_files/lecture04/join.png)

We’ve just used something called an [INNER JOIN](https://www.w3schools.com/sql/sql_join_inner.asp), which means we are ignoring rows that have no matches between the tables, but there are other types of joins, including [**LEFT JOIN**s](https://www.w3schools.com/sql/sql_join_left.asp), [**RIGHT JOIN**s](https://www.w3schools.com/sql/sql_join_right.asp), and [**FULL OUTER JOIN**s](https://www.w3schools.com/sql/sql_join_full.asp), which we won’t discuss here in detail.

### Indexing:

One way we can make our queries more efficient when dealing with large tables is to create an index similar to the index you might see in the back of a textbook. For example, if we know that we’ll often look up passengers by their last name, we could create an index from last name to id using the command:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">CREATE</span> <span class="k">INDEX</span> <span class="n">name_index</span> <span class="k">ON</span> <span class="n">passengers</span> <span class="p">(</span><span class="k">last</span><span class="p">);</span>
</code></pre></div></div>

### SQL Vulnerabilities

<dl>
  <dt>Now that we know the basics of using SQL to work with data, it’s important to point out the main vulnerabilities associated with using SQL. We’ll start with <a href="https://www.w3schools.com/sql/sql_injection.asp">SQL Injection</a>.</dt>
  <dd>
    <p>A SQL injection attack is when a malicious user enters SQL code as input on a site in order to bypass the sites security measures. For example, let’s say we have a table storing usernames and passwords, and then a login form on the home site of a page. We may search for the user using a query such as:</p>
  </dd>
</dl>

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">users</span>
<span class="k">WHERE</span> <span class="n">username</span> <span class="o">=</span> <span class="n">username</span> <span class="k">AND</span> <span class="n">password</span> <span class="o">=</span> <span class="n">password</span><span class="p">;</span>
</code></pre></div></div>

A user named Harry might go to this site and type `harry` as a username and `12345` as a password, in which case the query would look like this:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">users</span>
<span class="k">WHERE</span> <span class="n">username</span> <span class="o">=</span> <span class="nv">"harry"</span> <span class="k">AND</span> <span class="n">password</span> <span class="o">=</span> <span class="nv">"12345"</span><span class="p">;</span>
</code></pre></div></div>

A hacker, on the other hand, might type `harry" --` as a username and nothing as a password. It turns out that `--` stands for a comment in SQL, meaning the query would look like:

<div class="language-sql highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">SELECT</span> <span class="o">*</span> <span class="k">FROM</span> <span class="n">users</span>
<span class="k">WHERE</span> <span class="n">username</span> <span class="o">=</span> <span class="nv">"harry"</span><span class="c1">--" AND password = "12345";</span>
</code></pre></div></div>

Because in this query the password checking has been commented out, the hacker can log into Harry’s account without knowing their password. To solve this problem, we can use:

  - Escape characters to make sure SQL treats the input as plain text and not as SQL code.
  - An abstraction layer on top of SQL which includes its own escape sequence, so we don’t have to write SQL queries ourselves.


<dl>
  <dt>The other main vulnerability when it comes to SQL is known as a <a href="https://searchstorage.techtarget.com/definition/race-condition#:~:text=A%20race%20condition%20is%20an,sequence%20to%20be%20done%20correctly.">Race Condition</a>.</dt>
  <dd>
    <p>A race condition is a situation that occurs when multiple queries to a database occur simultaneously. When these are not adequately handled, problems can arise in the precise times that databases are updated. For example, let’s say I have $150 in my bank account. A race condition could occur if I log into my bank account on both my phone and my laptop, and attempt to withdraw $100 on each device. If the bank’s software developers did not deal with race conditions correctly, then I may be able to withdraw $200 from an account with only $150 in it. One potential solution for this problem would be locking the database. We could not allow any other interaction with the database until one transaction has been completed. In the bank example, after clicking navigating to the “Make a Withdrawl” page on my computer, the bank might not allow me to navigate to that page on my phone.</p>
  </dd>
</dl>

## Django Models

: [Django Models](https://docs.djangoproject.com/en/3.0/topics/db/models/) are a level of [abstraction](https://techterms.com/definition/abstraction) on top of SQL that allow us to work with databases using Python classes and objects rather than direct SQL queries.

Let’s get started on using models by creating a django project for our airline, and creating an app within that project.

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>django-admin startproject airline
<span class="nb">cd </span>airline
python manage.py startapp flights
</code></pre></div></div>

Now we’ll have to go through the process of adding an app as usual:

  1. Add `flights` to the `INSTALLED_APPS` list in `settings.py`
  1. Add a route for `flights` in `urls.py`:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">path</span><span class="p">(</span><span class="s">"flights/"</span><span class="p">,</span> <span class="n">include</span><span class="p">(</span><span class="s">"flights.urls"</span><span class="p">)),</span>
</code></pre></div></div>


  1. Create a `urls.py` file within the `flights` application. And fill it with standard `urls.py` imports and lists.


Now, rather than creating actual paths and getting started on `views.py`, we’ll create some models in the `models.py` file. In this file, we’ll outline what data we want to store in our application. Then, Django will determine the SQL syntax necessary to store information on each of our models. Let’s take a look at what a model for a single flight might look like:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Flight</span><span class="p">(</span><span class="n">models</span><span class="p">.</span><span class="n">Model</span><span class="p">):</span>
    <span class="n">origin</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>
    <span class="n">destination</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>
    <span class="n">duration</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">IntegerField</span><span class="p">()</span>
</code></pre></div></div>

Let’s take a look at what’s going on in this model definition:

  - In the first line, we create a new model that **extends** Django’s model class.
  - Below, we add fields for origin, destination, and duration. The first two are [Char Fields](https://docs.djangoproject.com/en/3.0/ref/forms/fields/#charfield), meaning they store strings, and the third is an [Integer Field](https://docs.djangoproject.com/en/3.0/ref/forms/fields/#integerfield). These are just two of many [built-in Django Field classes](https://docs.djangoproject.com/en/3.0/ref/forms/fields/#built-in-field-classes)
  - We specify maximum lengths of 64 for the two Character Fields. you can check the specifications available for a given field by checking the [documentation](https://docs.djangoproject.com/en/3.0/ref/forms/fields/#built-in-field-classes).


## Migrations

Now, even though we’ve created a model, we do not yet have a database to store this information. to create a database from our models, we navigate to the main directory of our project and run the command.

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>python manage.py makemigrations
</code></pre></div></div>

This command creates some Python files that will create or edit our database to be able to store what we have in our models. You should get an output that looks something like the one below, and if you navigate to your `migrations` directory, you’ll notice a new file was created for us

![migrations output 0](cs50.web.2020_files/lecture04/migration0.png)

ext, to apply these migrations to our database, we run the command

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>python manage.py migrate
</code></pre></div></div>

Now, you’ll see some default migrations have been applied along with our own, and you’ll also notice that we now have a file called `db.sqlite3` in our project’s directory

![migrate output](cs50.web.2020_files/lecture04/migration1.png)

## Shell

Now, to begin working adding information to and manipulating this database, we can enter Django’s shell where we can run Python commands within our project.

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>python manage.py shell
Python 3.7.2 <span class="o">(</span>default, Dec 29 2018, 00:00:04<span class="o">)</span>
Type <span class="s1">'copyright'</span>, <span class="s1">'credits'</span> or <span class="s1">'license'</span> <span class="k">for </span>more information
IPython 6.5.0 <span class="nt">--</span> An enhanced Interactive Python. Type <span class="s1">'?'</span> <span class="k">for </span>help.
</code></pre></div></div>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Import our flight model
</span><span class="n">In</span> <span class="p">[</span><span class="mi">1</span><span class="p">]:</span> <span class="kn">from</span> <span class="nn">flights.models</span> <span class="kn">import</span> <span class="n">Flight</span>

<span class="c1"># Create a new flight
</span><span class="n">In</span> <span class="p">[</span><span class="mi">2</span><span class="p">]:</span> <span class="n">f</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">(</span><span class="n">origin</span><span class="o">=</span><span class="s">"New York"</span><span class="p">,</span> <span class="n">destination</span><span class="o">=</span><span class="s">"London"</span><span class="p">,</span> <span class="n">duration</span><span class="o">=</span><span class="mi">415</span><span class="p">)</span>

<span class="c1"># Instert that flight into our database
</span><span class="n">In</span> <span class="p">[</span><span class="mi">3</span><span class="p">]:</span> <span class="n">f</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>

<span class="c1"># Query for all flights stored in the database
</span><span class="n">In</span> <span class="p">[</span><span class="mi">4</span><span class="p">]:</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="nb">all</span><span class="p">()</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">4</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">QuerySet</span> <span class="p">[</span><span class="o">&lt;</span><span class="n">Flight</span><span class="p">:</span> <span class="n">Flight</span> <span class="nb">object</span> <span class="p">(</span><span class="mi">1</span><span class="p">)</span><span class="o">&gt;</span><span class="p">]</span><span class="o">&gt;</span>
</code></pre></div></div>

When we query our database, we see that we get just one flight called `Flight object (1)`. This isn’t a very informative name, but we can fix that. Inside `models.py`, we’ll define a `__str__` function that provides instructions for how to turn a Flight object into a string:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Flight</span><span class="p">(</span><span class="n">models</span><span class="p">.</span><span class="n">Model</span><span class="p">):</span>
    <span class="n">origin</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>
    <span class="n">destination</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>
    <span class="n">duration</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">IntegerField</span><span class="p">()</span>

    <span class="k">def</span> <span class="nf">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="s">f"</span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="nb">id</span><span class="si">}</span><span class="s">: </span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">origin</span><span class="si">}</span><span class="s"> to </span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">destination</span><span class="si">}</span><span class="s">"</span>
</code></pre></div></div>

Now, when we go back to the shell, our output is a bit more readable:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Create a variable called flights to store the results of a query
</span><span class="n">In</span> <span class="p">[</span><span class="mi">7</span><span class="p">]:</span> <span class="n">flights</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="nb">all</span><span class="p">()</span>

<span class="c1"># Displaying all flights
</span><span class="n">In</span> <span class="p">[</span><span class="mi">8</span><span class="p">]:</span> <span class="n">flights</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">8</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">QuerySet</span> <span class="p">[</span><span class="o">&lt;</span><span class="n">Flight</span><span class="p">:</span> <span class="mi">1</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="n">to</span> <span class="n">London</span><span class="o">&gt;</span><span class="p">]</span><span class="o">&gt;</span>

<span class="c1"># Isolating just the first flight
</span><span class="n">In</span> <span class="p">[</span><span class="mi">9</span><span class="p">]:</span> <span class="n">flight</span> <span class="o">=</span> <span class="n">flights</span><span class="p">.</span><span class="n">first</span><span class="p">()</span>

<span class="c1"># Printing flight information
</span><span class="n">In</span> <span class="p">[</span><span class="mi">10</span><span class="p">]:</span> <span class="n">flight</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">10</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">Flight</span><span class="p">:</span> <span class="mi">1</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="n">to</span> <span class="n">London</span><span class="o">&gt;</span>

<span class="c1"># Display flight id
</span><span class="n">In</span> <span class="p">[</span><span class="mi">11</span><span class="p">]:</span> <span class="n">flight</span><span class="p">.</span><span class="nb">id</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">11</span><span class="p">]:</span> <span class="mi">1</span>

<span class="c1"># Display flight origin
</span><span class="n">In</span> <span class="p">[</span><span class="mi">12</span><span class="p">]:</span> <span class="n">flight</span><span class="p">.</span><span class="n">origin</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">12</span><span class="p">]:</span> <span class="s">'New York'</span>

<span class="c1"># Display flight distination
</span><span class="n">In</span> <span class="p">[</span><span class="mi">13</span><span class="p">]:</span> <span class="n">flight</span><span class="p">.</span><span class="n">destination</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">13</span><span class="p">]:</span> <span class="s">'London'</span>

<span class="c1"># Display flight duration
</span><span class="n">In</span> <span class="p">[</span><span class="mi">14</span><span class="p">]:</span> <span class="n">flight</span><span class="p">.</span><span class="n">duration</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">14</span><span class="p">]:</span> <span class="mi">415</span>
</code></pre></div></div>

This is a good start, but thinking back to earlier, we don’t want to have to store the city name as an origin and destination for every flight, so we probably want another model for an airport that is somehow related to the flight model:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Airport</span><span class="p">(</span><span class="n">models</span><span class="p">.</span><span class="n">Model</span><span class="p">):</span>
    <span class="n">code</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
    <span class="n">city</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>

    <span class="k">def</span> <span class="nf">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="s">f"</span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">city</span><span class="si">}</span><span class="s"> (</span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">code</span><span class="si">}</span><span class="s">)"</span>

<span class="k">class</span> <span class="nc">Flight</span><span class="p">(</span><span class="n">models</span><span class="p">.</span><span class="n">Model</span><span class="p">):</span>
    <span class="n">origin</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">ForeignKey</span><span class="p">(</span><span class="n">Airport</span><span class="p">,</span> <span class="n">on_delete</span><span class="o">=</span><span class="n">models</span><span class="p">.</span><span class="n">CASCADE</span><span class="p">,</span> <span class="n">related_name</span><span class="o">=</span><span class="s">"departures"</span><span class="p">)</span>
    <span class="n">destination</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">ForeignKey</span><span class="p">(</span><span class="n">Airport</span><span class="p">,</span> <span class="n">on_delete</span><span class="o">=</span><span class="n">models</span><span class="p">.</span><span class="n">CASCADE</span><span class="p">,</span> <span class="n">related_name</span><span class="o">=</span><span class="s">"arrivals"</span><span class="p">)</span>
    <span class="n">duration</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">IntegerField</span><span class="p">()</span>

    <span class="k">def</span> <span class="nf">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="s">f"</span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="nb">id</span><span class="si">}</span><span class="s">: </span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">origin</span><span class="si">}</span><span class="s"> to </span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">destination</span><span class="si">}</span><span class="s">"</span>
</code></pre></div></div>

We’ve seen everything in our new `Airport` class before, but the changes to the `origin` and `destination` fields within the `Flight` class are new to us:

  - We specify that the `origin` and `destination` fields are each [Foreign Keys](https://docs.djangoproject.com/en/3.0/topics/db/examples/many_to_one/), which means they refer to another object.
  - By entering `Airport` as our first argument, we are specifying the type of object this field refers to.
  - The next argument, `on_delete=models.CASCADE` gives instructions for what should happen if an airport is deleted. In this case, we specify that when an airport is deleted, all flights associated with it should also be deleted. There are [several other options](https://docs.djangoproject.com/en/3.0/ref/models/fields/#django.db.models.ForeignKey.on_delete) in addition to `CASCADE`.
  - We provide a [related name](https://docs.djangoproject.com/en/3.0/ref/models/fields/#django.db.models.ForeignKey.related_name), which gives us a way to search for all flights with a given airport as their origin or destination.


Every time we make changes in `models.py`, we have to make migrations and then migrate. Note that you may have to delete your existing flight from New York to London, as it doesn’t fit in with the new database structure.

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c"># Create New Migrations</span>
python manage.py makemigration

<span class="c"># Migrate</span>
python manage.py migrate
</code></pre></div></div>

Now, let’s try these new models out in the Django shell:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Import all models
</span><span class="n">In</span> <span class="p">[</span><span class="mi">1</span><span class="p">]:</span> <span class="kn">from</span> <span class="nn">flights.models</span> <span class="kn">import</span> <span class="o">*</span>

<span class="c1"># Create some new airports
</span><span class="n">In</span> <span class="p">[</span><span class="mi">2</span><span class="p">]:</span> <span class="n">jfk</span> <span class="o">=</span> <span class="n">Airport</span><span class="p">(</span><span class="n">code</span><span class="o">=</span><span class="s">"JFK"</span><span class="p">,</span> <span class="n">city</span><span class="o">=</span><span class="s">"New York"</span><span class="p">)</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">4</span><span class="p">]:</span> <span class="n">lhr</span> <span class="o">=</span> <span class="n">Airport</span><span class="p">(</span><span class="n">code</span><span class="o">=</span><span class="s">"LHR"</span><span class="p">,</span> <span class="n">city</span><span class="o">=</span><span class="s">"London"</span><span class="p">)</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">6</span><span class="p">]:</span> <span class="n">cdg</span> <span class="o">=</span> <span class="n">Airport</span><span class="p">(</span><span class="n">code</span><span class="o">=</span><span class="s">"CDG"</span><span class="p">,</span> <span class="n">city</span><span class="o">=</span><span class="s">"Paris"</span><span class="p">)</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">9</span><span class="p">]:</span> <span class="n">nrt</span> <span class="o">=</span> <span class="n">Airport</span><span class="p">(</span><span class="n">code</span><span class="o">=</span><span class="s">"NRT"</span><span class="p">,</span> <span class="n">city</span><span class="o">=</span><span class="s">"Tokyo"</span><span class="p">)</span>

<span class="c1"># Save the airports to the database
</span><span class="n">In</span> <span class="p">[</span><span class="mi">3</span><span class="p">]:</span> <span class="n">jfk</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">5</span><span class="p">]:</span> <span class="n">lhr</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">8</span><span class="p">]:</span> <span class="n">cdg</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">10</span><span class="p">]:</span> <span class="n">nrt</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>

<span class="c1"># Add a flight and save it to the database
</span><span class="n">f</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">(</span><span class="n">origin</span><span class="o">=</span><span class="n">jfk</span><span class="p">,</span> <span class="n">destination</span><span class="o">=</span><span class="n">lhr</span><span class="p">,</span> <span class="n">duration</span><span class="o">=</span><span class="mi">414</span><span class="p">)</span>
<span class="n">f</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>

<span class="c1"># Display some info about the flight
</span><span class="n">In</span> <span class="p">[</span><span class="mi">14</span><span class="p">]:</span> <span class="n">f</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">14</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">Flight</span><span class="p">:</span> <span class="mi">1</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="p">(</span><span class="n">JFK</span><span class="p">)</span> <span class="n">to</span> <span class="n">London</span> <span class="p">(</span><span class="n">LHR</span><span class="p">)</span><span class="o">&gt;</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">15</span><span class="p">]:</span> <span class="n">f</span><span class="p">.</span><span class="n">origin</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">15</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">Airport</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="p">(</span><span class="n">JFK</span><span class="p">)</span><span class="o">&gt;</span>

<span class="c1"># Using the related name to query by airport of arrival:
</span><span class="n">In</span> <span class="p">[</span><span class="mi">17</span><span class="p">]:</span> <span class="n">lhr</span><span class="p">.</span><span class="n">arrivals</span><span class="p">.</span><span class="nb">all</span><span class="p">()</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">17</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">QuerySet</span> <span class="p">[</span><span class="o">&lt;</span><span class="n">Flight</span><span class="p">:</span> <span class="mi">1</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="p">(</span><span class="n">JFK</span><span class="p">)</span> <span class="n">to</span> <span class="n">London</span> <span class="p">(</span><span class="n">LHR</span><span class="p">)</span><span class="o">&gt;</span><span class="p">]</span><span class="o">&gt;</span>
</code></pre></div></div>

### Starting our application

We can now begin to build an application around this process of using models to interact with a database. Let’s begin by creating an index route for our airline. Inside `urls.py`:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">urlpatterns</span> <span class="o">=</span> <span class="p">[</span>
    <span class="n">path</span><span class="p">(</span><span class="s">''</span><span class="p">,</span> <span class="n">views</span><span class="p">.</span><span class="n">index</span><span class="p">,</span> <span class="n">name</span><span class="o">=</span><span class="s">"index"</span><span class="p">),</span>
<span class="p">]</span>
</code></pre></div></div>

Inside `views.py`:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">from</span> <span class="nn">django.shortcuts</span> <span class="kn">import</span> <span class="n">render</span>
<span class="kn">from</span> <span class="nn">.models</span> <span class="kn">import</span> <span class="n">Flight</span><span class="p">,</span> <span class="n">Airport</span>

<span class="c1"># Create your views here.
</span>
<span class="k">def</span> <span class="nf">index</span><span class="p">(</span><span class="n">request</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"flights/index.html"</span><span class="p">,</span> <span class="p">{</span>
        <span class="s">"flights"</span><span class="p">:</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="nb">all</span><span class="p">()</span>
    <span class="p">})</span>
</code></pre></div></div>

Inside our new `layout.html` file:

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
<span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html</span> <span class="na">lang=</span><span class="s">"en"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;head&gt;</span>
        <span class="nt">&lt;title&gt;</span>Flights<span class="nt">&lt;/title&gt;</span>
    <span class="nt">&lt;/head&gt;</span>
    <span class="nt">&lt;body&gt;</span>
        {% block body %}
        {% endblock %}
    <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>

</code></pre></div></div>

Inside a new `index.html` file:

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
{% extends "flights/layout.html" %}

{% block body %}
    <span class="nt">&lt;h1&gt;</span>Flights:<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;ul&gt;</span>
        {% for flight in flights %}
            <span class="nt">&lt;li&gt;</span>Flight {{ flight.id }}: {{ flight.origin }} to {{ flight.destination }}<span class="nt">&lt;/li&gt;</span>
        {% endfor %}
    <span class="nt">&lt;/ul&gt;</span>
{% endblock %}

</code></pre></div></div>

What we’ve done here is created a default page where we have a list of all flights we’ve created so far. When we open up the page now, it looks like this

![Just one on the list](cs50.web.2020_files/lecture04/flightspage0.png)

Now, let’s add some more flights to our application by returning to the Django shell:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Using the filter command to find all airports based in New York
</span><span class="n">In</span> <span class="p">[</span><span class="mi">3</span><span class="p">]:</span> <span class="n">Airport</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="nb">filter</span><span class="p">(</span><span class="n">city</span><span class="o">=</span><span class="s">"New York"</span><span class="p">)</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">3</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">QuerySet</span> <span class="p">[</span><span class="o">&lt;</span><span class="n">Airport</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="p">(</span><span class="n">JFK</span><span class="p">)</span><span class="o">&gt;</span><span class="p">]</span><span class="o">&gt;</span>

<span class="c1"># Using the get command to get only one airport in New York
</span><span class="n">In</span> <span class="p">[</span><span class="mi">5</span><span class="p">]:</span> <span class="n">Airport</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="n">city</span><span class="o">=</span><span class="s">"New York"</span><span class="p">)</span>
<span class="n">Out</span><span class="p">[</span><span class="mi">5</span><span class="p">]:</span> <span class="o">&lt;</span><span class="n">Airport</span><span class="p">:</span> <span class="n">New</span> <span class="n">York</span> <span class="p">(</span><span class="n">JFK</span><span class="p">)</span><span class="o">&gt;</span>

<span class="c1"># Assigning some airports to variable names:
</span><span class="n">In</span> <span class="p">[</span><span class="mi">6</span><span class="p">]:</span> <span class="n">jfk</span> <span class="o">=</span> <span class="n">Airport</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="n">city</span><span class="o">=</span><span class="s">"New York"</span><span class="p">)</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">7</span><span class="p">]:</span> <span class="n">cdg</span> <span class="o">=</span> <span class="n">Airport</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="n">city</span><span class="o">=</span><span class="s">"Paris"</span><span class="p">)</span>

<span class="c1"># Creating and saving a new flight:
</span><span class="n">In</span> <span class="p">[</span><span class="mi">8</span><span class="p">]:</span> <span class="n">f</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">(</span><span class="n">origin</span><span class="o">=</span><span class="n">jfk</span><span class="p">,</span> <span class="n">destination</span><span class="o">=</span><span class="n">cdg</span><span class="p">,</span> <span class="n">duration</span><span class="o">=</span><span class="mi">435</span><span class="p">)</span>
<span class="n">In</span> <span class="p">[</span><span class="mi">9</span><span class="p">]:</span> <span class="n">f</span><span class="p">.</span><span class="n">save</span><span class="p">()</span>
</code></pre></div></div>

Now, when we visit our site again

![Two flights](cs50.web.2020_files/lecture04/flightpage1.png)

## Django Admin

Since it is so common for developers to have to create new objects like we’ve been doing in the shell, Django comes with a [default admin interface](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/) that allows us to do this more easily. To begin using this tool, we must first create an administrative user:

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">(</span>base<span class="o">)</span> cleggett@Connors-MacBook-Pro airline % python manage.py createsuperuser
Username: user_a
Email address: a@a.com
Password:
Password <span class="o">(</span>again<span class="o">)</span>:
Superuser created successfully.
</code></pre></div></div>

Now, we must add our models to the admin application by entering the `admin.py` file within our app, and importing and registering our models. This tells Django which models we would like to have access to in the admin app.

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">from</span> <span class="nn">django.contrib</span> <span class="kn">import</span> <span class="n">admin</span>
<span class="kn">from</span> <span class="nn">.models</span> <span class="kn">import</span> <span class="n">Flight</span><span class="p">,</span> <span class="n">Airport</span>

<span class="c1"># Register your models here.
</span><span class="n">admin</span><span class="p">.</span><span class="n">site</span><span class="p">.</span><span class="n">register</span><span class="p">(</span><span class="n">Flight</span><span class="p">)</span>
<span class="n">admin</span><span class="p">.</span><span class="n">site</span><span class="p">.</span><span class="n">register</span><span class="p">(</span><span class="n">Airport</span><span class="p">)</span>
</code></pre></div></div>

Now, when we visit our site and add `/admin` to the url, we can log into a page that looks like this

![login](cs50.web.2020_files/lecture04/login.png)

After loggin in, you’ll be brought to a page like the one below where you can create, edit, and delete objects stored in the database

![admin page](cs50.web.2020_files/lecture04/admin.png)

Now, let’s add a few more pages to our site. We’ll begin by adding the ability to click on a flight to get more information about it. To do this, let’s create a URL path that includes the `id` of a flight:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">path</span><span class="p">(</span><span class="s">"&lt;int:flight_id&gt;"</span><span class="p">,</span> <span class="n">views</span><span class="p">.</span><span class="n">flight</span><span class="p">,</span> <span class="n">name</span><span class="o">=</span><span class="s">"flight"</span><span class="p">)</span>
</code></pre></div></div>

Then, in `views.py` we will create a `flight` function that takes in a flight id and renders a new html page:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">flight</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="n">flight_id</span><span class="p">):</span>
    <span class="n">flight</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="nb">id</span><span class="o">=</span><span class="n">flight_id</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"flights/flight.html"</span><span class="p">,</span> <span class="p">{</span>
        <span class="s">"flight"</span><span class="p">:</span> <span class="n">flight</span>
    <span class="p">})</span>
</code></pre></div></div>

Now we’ll create a template to display this flight information with a link back to the home page

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
{% extends "flights/layout.html" %}

{% block body %}
    <span class="nt">&lt;h1&gt;</span>Flight {{ flight.id }}<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;ul&gt;</span>
        <span class="nt">&lt;li&gt;</span>Origin: {{ flight.origin }}<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;li&gt;</span>Destination: {{ flight.destination }}<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;li&gt;</span>Duration: {{ flight.duration }} minutes<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;/ul&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"{% url 'index' %}"</span><span class="nt">&gt;</span>All Flights<span class="nt">&lt;/a&gt;</span>
{% endblock %}

</code></pre></div></div>

Finally, we need to add the ability to link from one page to another, so we’ll modify our index page to include links:

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
{% extends "flights/layout.html" %}

{% block body %}
    <span class="nt">&lt;h1&gt;</span>Flights:<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;ul&gt;</span>
        {% for flight in flights %}
            <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"{% url 'flight' flight.id %}"</span><span class="nt">&gt;</span>Flight {{ flight.id }}<span class="nt">&lt;/a&gt;</span>: {{ flight.origin }} to {{ flight.destination }}<span class="nt">&lt;/li&gt;</span>
        {% endfor %}
    <span class="nt">&lt;/ul&gt;</span>
{% endblock %}

</code></pre></div></div>

Now our homepage looks like this

![new home](cs50.web.2020_files/lecture04/flights_links.png)

And when we click on flight 5, for example, we’re brought to this page

![One flight](cs50.web.2020_files/lecture04/flight5.png)

## Many-to-Many Relationships

Now, let’s work on integrating passengers into our models. We’ll create a passenger model to start:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Passenger</span><span class="p">(</span><span class="n">models</span><span class="p">.</span><span class="n">Model</span><span class="p">):</span>
    <span class="n">first</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>
    <span class="n">last</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">CharField</span><span class="p">(</span><span class="n">max_length</span><span class="o">=</span><span class="mi">64</span><span class="p">)</span>
    <span class="n">flights</span> <span class="o">=</span> <span class="n">models</span><span class="p">.</span><span class="n">ManyToManyField</span><span class="p">(</span><span class="n">Flight</span><span class="p">,</span> <span class="n">blank</span><span class="o">=</span><span class="bp">True</span><span class="p">,</span> <span class="n">related_name</span><span class="o">=</span><span class="s">"passengers"</span><span class="p">)</span>

    <span class="k">def</span> <span class="nf">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="s">f"</span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">first</span><span class="si">}</span><span class="s"> </span><span class="si">{</span><span class="bp">self</span><span class="p">.</span><span class="n">last</span><span class="si">}</span><span class="s">"</span>
</code></pre></div></div>


  - As we discussed, passengers have a **Many to Many** relationship with flights, which we describe in Django using the ManyToManyField.
  - The first argument in this field is the class of objects that this one is related to.
  - We have provided the argument `blank=True` which means a passenger can have no flights
  - We have added a `related_name` that serves the same purpose as it did earlier: it will allow us to find all passengers on a given flight.


To actually make these changes, we must make migrations and migrate. We can then register the Passenger model in `admin.py` and visit the admin page to create some passengers!

Now that we’ve added some passengers, let’s update our flight page so that it displays all passengers on a flight. We’ll first visit `views.py` and update our flight view to provide a list of passengers as context. We access the list using the related name we defined earlier.

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">flight</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="n">flight_id</span><span class="p">):</span>
    <span class="n">flight</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="nb">id</span><span class="o">=</span><span class="n">flight_id</span><span class="p">)</span>
    <span class="n">passengers</span> <span class="o">=</span> <span class="n">flight</span><span class="p">.</span><span class="n">passengers</span><span class="p">.</span><span class="nb">all</span><span class="p">()</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"flights/flight.html"</span><span class="p">,</span> <span class="p">{</span>
        <span class="s">"flight"</span><span class="p">:</span> <span class="n">flight</span><span class="p">,</span>
        <span class="s">"passengers"</span><span class="p">:</span> <span class="n">passengers</span>
    <span class="p">})</span>
</code></pre></div></div>

Now, add a list of passengers to `flight.html`:

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
<span class="nt">&lt;h2&gt;</span>Passengers:<span class="nt">&lt;/h2&gt;</span>
<span class="nt">&lt;ul&gt;</span>
    {% for passenger in passengers %}
        <span class="nt">&lt;li&gt;</span>{{ passenger }}<span class="nt">&lt;/li&gt;</span>
    {% empty %}
        <span class="nt">&lt;li&gt;</span>No Passengers.<span class="nt">&lt;/li&gt;</span>
    {% endfor %}
<span class="nt">&lt;/ul&gt;</span>

</code></pre></div></div>

At this point, when we click on flight 5, we see

![new flight 5](cs50.web.2020_files/lecture04/flight5update.png)

Now, let’s work on giving visitors to our site the ability to book a flight. We’ll do this by adding a booking route in `urls.py`:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">path</span><span class="p">(</span><span class="s">"&lt;int:flight_id&gt;/book"</span><span class="p">,</span> <span class="n">views</span><span class="p">.</span><span class="n">book</span><span class="p">,</span> <span class="n">name</span><span class="o">=</span><span class="s">"book"</span><span class="p">)</span>
</code></pre></div></div>

Now, we’ll add a book function to `views.py` that adds a passenger to a flight:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">book</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="n">flight_id</span><span class="p">):</span>

    <span class="c1"># For a post request, add a new flight
</span>    <span class="k">if</span> <span class="n">request</span><span class="p">.</span><span class="n">method</span> <span class="o">==</span> <span class="s">"POST"</span><span class="p">:</span>

        <span class="c1"># Accessing the flight
</span>        <span class="n">flight</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="n">pk</span><span class="o">=</span><span class="n">flight_id</span><span class="p">)</span>

        <span class="c1"># Finding the passenger id from the submitted form data
</span>        <span class="n">passenger_id</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="n">request</span><span class="p">.</span><span class="n">POST</span><span class="p">[</span><span class="s">"passenger"</span><span class="p">])</span>

        <span class="c1"># Finding the passenger based on the id
</span>        <span class="n">passenger</span> <span class="o">=</span> <span class="n">Passenger</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="n">pk</span><span class="o">=</span><span class="n">passenger_id</span><span class="p">)</span>

        <span class="c1"># Add passenger to the flight
</span>        <span class="n">passenger</span><span class="p">.</span><span class="n">flights</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="n">flight</span><span class="p">)</span>

        <span class="c1"># Redirect user to flight page
</span>        <span class="k">return</span> <span class="n">HttpResponseRedirect</span><span class="p">(</span><span class="n">reverse</span><span class="p">(</span><span class="s">"flight"</span><span class="p">,</span> <span class="n">args</span><span class="o">=</span><span class="p">(</span><span class="n">flight</span><span class="p">.</span><span class="nb">id</span><span class="p">,)))</span>
</code></pre></div></div>

Next, we’ll add some context to our flight template so that the page has access to everyone who is not currently a passenger on the flight using Django’s ability to [exclude](https://docs.djangoproject.com/en/3.0/topics/db/queries/#retrieving-specific-objects-with-filters) certain objects from a query:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">flight</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="n">flight_id</span><span class="p">):</span>
    <span class="n">flight</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">get</span><span class="p">(</span><span class="nb">id</span><span class="o">=</span><span class="n">flight_id</span><span class="p">)</span>
    <span class="n">passengers</span> <span class="o">=</span> <span class="n">flight</span><span class="p">.</span><span class="n">passengers</span><span class="p">.</span><span class="nb">all</span><span class="p">()</span>
    <span class="n">non_passengers</span> <span class="o">=</span> <span class="n">Passenger</span><span class="p">.</span><span class="n">objects</span><span class="p">.</span><span class="n">exclude</span><span class="p">(</span><span class="n">flights</span><span class="o">=</span><span class="n">flight</span><span class="p">).</span><span class="nb">all</span><span class="p">()</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"flights/flight.html"</span><span class="p">,</span> <span class="p">{</span>
        <span class="s">"flight"</span><span class="p">:</span> <span class="n">flight</span><span class="p">,</span>
        <span class="s">"passengers"</span><span class="p">:</span> <span class="n">passengers</span><span class="p">,</span>
        <span class="s">"non_passengers"</span><span class="p">:</span> <span class="n">non_passengers</span>
    <span class="p">})</span>
</code></pre></div></div>

Now, we’ll add a form to our flight page’s HTML using a select input field:

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
<span class="nt">&lt;form</span> <span class="na">action=</span><span class="s">"{% url 'book' flight.id %}"</span> <span class="na">method=</span><span class="s">"post"</span><span class="nt">&gt;</span>
    {% csrf_token %}
    <span class="nt">&lt;select</span> <span class="na">name=</span><span class="s">"passenger"</span> <span class="na">id=</span><span class="s">""</span><span class="nt">&gt;</span>
        {% for passenger in non_passengers %}
            <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"{{ passenger.id }}"</span><span class="nt">&gt;</span>{{ passenger }}<span class="nt">&lt;/option&gt;</span>
        {% endfor %}
    <span class="nt">&lt;/select&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"submit"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/form&gt;</span>

</code></pre></div></div>

Now, let’s see what the site looks like when I go to a flight page and then add a passenger

![form](cs50.web.2020_files/lecture04/form.png)

![submitted](cs50.web.2020_files/lecture04/submitted.png)

Another advantage of using the Django admin app is that it is customizable. For example, if we wish to see all aspects of a flight in the admin interface, we can create a new class within `admin.py` and add it as an argument when registering the `Flight` model:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">FlightAdmin</span><span class="p">(</span><span class="n">admin</span><span class="p">.</span><span class="n">ModelAdmin</span><span class="p">):</span>
    <span class="n">list_display</span> <span class="o">=</span> <span class="p">(</span><span class="s">"id"</span><span class="p">,</span> <span class="s">"origin"</span><span class="p">,</span> <span class="s">"destination"</span><span class="p">,</span> <span class="s">"duration"</span><span class="p">)</span>

<span class="c1"># Register your models here.
</span><span class="n">admin</span><span class="p">.</span><span class="n">site</span><span class="p">.</span><span class="n">register</span><span class="p">(</span><span class="n">Flight</span><span class="p">,</span> <span class="n">FlightAdmin</span><span class="p">)</span>
</code></pre></div></div>

Now, when we visit the admin page for flights, we can see the `id` as well

![admin table](cs50.web.2020_files/lecture04/admin1.png)

heck out [Django’s admin documentation](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/) to find more ways to customize the admin app.

## Users

The last thing we’ll discuss in lecture today is the idea of authentication, or allowing users to log in and out of a website. Fortunately, Django makes this very easy for us, so let’s go through an example of how we would do this. We’ll start by creating a new app called `users`. Here we’ll go through all the normal steps of creating a new app, but in our new `urls.py` file, we’ll add a few more routes:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">urlpatterns</span> <span class="o">=</span> <span class="p">[</span>
    <span class="n">path</span><span class="p">(</span><span class="s">''</span><span class="p">,</span> <span class="n">views</span><span class="p">.</span><span class="n">index</span><span class="p">,</span> <span class="n">name</span><span class="o">=</span><span class="s">"index"</span><span class="p">),</span>
    <span class="n">path</span><span class="p">(</span><span class="s">"login"</span><span class="p">,</span> <span class="n">views</span><span class="p">.</span><span class="n">login_view</span><span class="p">,</span> <span class="n">name</span><span class="o">=</span><span class="s">"login"</span><span class="p">),</span>
    <span class="n">path</span><span class="p">(</span><span class="s">"logout"</span><span class="p">,</span> <span class="n">views</span><span class="p">.</span><span class="n">logout_view</span><span class="p">,</span> <span class="n">name</span><span class="o">=</span><span class="s">"logout"</span><span class="p">)</span>
<span class="p">]</span>
</code></pre></div></div>

Let’s begin by creating a form where a user can log in. We’ll create a `layout.html` file as always, and then create a `login.html` file which contains a form, and that displays a message if one exists.

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
{% extends "users/layout.html" %}

{% block body %}
    {% if message %}
        <span class="nt">&lt;div&gt;</span>{{ message }}<span class="nt">&lt;/div&gt;</span>
    {% endif %}

    <span class="nt">&lt;form</span> <span class="na">action=</span><span class="s">"{% url 'login' %}"</span> <span class="na">method=</span><span class="s">"post"</span><span class="nt">&gt;</span>
        {% csrf_token %}
        <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span><span class="err">,</span> <span class="na">name=</span><span class="s">"username"</span><span class="err">,</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span><span class="err">,</span> <span class="na">name=</span><span class="s">"password"</span><span class="err">,</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"submit"</span><span class="err">,</span> <span class="na">value=</span><span class="s">"Login"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/form&gt;</span>
{% endblock %}

</code></pre></div></div>

Now, in `views.py`, we’ll add three functions:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">index</span><span class="p">(</span><span class="n">request</span><span class="p">):</span>
    <span class="c1"># If no user is signed in, return to login page:
</span>    <span class="k">if</span> <span class="ow">not</span> <span class="n">request</span><span class="p">.</span><span class="n">user</span><span class="p">.</span><span class="n">is_authenticated</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">HttpResponseRedirect</span><span class="p">(</span><span class="n">reverse</span><span class="p">(</span><span class="s">"login"</span><span class="p">))</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"users/user.html"</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">login_view</span><span class="p">(</span><span class="n">request</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"users/login.html"</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">logout_view</span><span class="p">(</span><span class="n">request</span><span class="p">):</span>
    <span class="c1"># Pass is a simple way to tell python to do nothing.
</span>    <span class="k">pass</span>
</code></pre></div></div>

Next, we can head to the admin site and add some users. After doing that, we’ll go back to `views.py` and update our `login_view` function to handle a `POST` request with a username and password:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Additional imports we'll need:
</span><span class="kn">from</span> <span class="nn">django.contrib.auth</span> <span class="kn">import</span> <span class="n">authenticate</span><span class="p">,</span> <span class="n">login</span><span class="p">,</span> <span class="n">logout</span>

<span class="k">def</span> <span class="nf">login_view</span><span class="p">(</span><span class="n">request</span><span class="p">):</span>
    <span class="k">if</span> <span class="n">request</span><span class="p">.</span><span class="n">method</span> <span class="o">==</span> <span class="s">"POST"</span><span class="p">:</span>
        <span class="c1"># Accessing username and password from form data
</span>        <span class="n">username</span> <span class="o">=</span> <span class="n">request</span><span class="p">.</span><span class="n">POST</span><span class="p">[</span><span class="s">"username"</span><span class="p">]</span>
        <span class="n">password</span> <span class="o">=</span> <span class="n">request</span><span class="p">.</span><span class="n">POST</span><span class="p">[</span><span class="s">"password"</span><span class="p">]</span>

        <span class="c1"># Check if username and password are correct, returning User object if so
</span>        <span class="n">user</span> <span class="o">=</span> <span class="n">authenticate</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="n">username</span><span class="o">=</span><span class="n">username</span><span class="p">,</span> <span class="n">password</span><span class="o">=</span><span class="n">password</span><span class="p">)</span>

        <span class="c1"># If user object is returned, log in and route to index page:
</span>        <span class="k">if</span> <span class="n">user</span><span class="p">:</span>
            <span class="n">login</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="n">user</span><span class="p">)</span>
            <span class="k">return</span> <span class="n">HttpResponseRedirect</span><span class="p">(</span><span class="n">reverse</span><span class="p">(</span><span class="s">"index"</span><span class="p">))</span>
        <span class="c1"># Otherwise, return login page again with new context
</span>        <span class="k">else</span><span class="p">:</span>
            <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"users/login.html"</span><span class="p">,</span> <span class="p">{</span>
                <span class="s">"message"</span><span class="p">:</span> <span class="s">"Invalid Credentials"</span>
            <span class="p">})</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"users/login.html"</span><span class="p">)</span>
</code></pre></div></div>

Now, we’ll create the `user.html` file that the `index` function renders when a user is authenticated:

<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code>
{% extends "users/layout.html" %}

{% block body %}
    <span class="nt">&lt;h1&gt;</span>Welcome, {{ request.user.first_name }}<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;ul&gt;</span>
        <span class="nt">&lt;li&gt;</span>Username: {{ request.user.username }}<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;li&gt;</span>Email: {{ request.user.email }}<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;/ul&gt;</span>

    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"{% url 'logout' %}"</span><span class="nt">&gt;</span>Log Out<span class="nt">&lt;/a&gt;</span>
{% endblock %}

</code></pre></div></div>

Finally, to allow the user to log out, we’ll update the `logout_view` function so that it uses Django’s built-in `logout` function:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">logout_view</span><span class="p">(</span><span class="n">request</span><span class="p">):</span>
    <span class="n">logout</span><span class="p">(</span><span class="n">request</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">render</span><span class="p">(</span><span class="n">request</span><span class="p">,</span> <span class="s">"users/login.html"</span><span class="p">,</span> <span class="p">{</span>
                <span class="s">"message"</span><span class="p">:</span> <span class="s">"Logged Out"</span>
            <span class="p">})</span>
</code></pre></div></div>

Now that we’re finished, here’s a demonstration of the site

![Demo](cs50.web.2020_files/lecture04/demo.gif)

That’s all for this lecture! Next time, we’ll learn our second programming language of the course: JavaScript.


                </main>

            </div>

        </div>
