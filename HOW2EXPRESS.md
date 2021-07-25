1. npm install express, run 'express --view=pug' in cmd
2. Check route handlers
    Top route handlers are in index.js, where you define 
    home page routes.

    app.get('RELATIVE ROUTE', function (req, res, next){
        res.render('PUG FILE NAME', { 'TEMPLATE VARIABLE NAME': 'TEMPLATE VARIABLE VALUE'});
    });

3. Write controller function
    exports.index = function (req, res) {
        res.render('PUG FILE NAME, { 'TEMPLATE VAR NAME : TEMPLATE VAR VALUE })
    }

4. Call controllers in router function
    router.get('/', exoController.index);

5. Create pug template, basically weird HTML
    doctype html
    html(lang="en")
      head
        title= title
        script(type='text/javascript').
      body
        h1= title

        p This is a line with #[em some emphasis] and #[strong strong text] markup.
        p This line has un-escaped data: !{'<em> is emphasised</em>'} and escaped   data: #{'<em> is not emphasised</em>'}.
          | This line follows on.
        p= 'Evaluated and <em>escaped expression</em>:' + title

        <!-- You can add HTML comments directly -->
        // You can add single line JavaScript comments and they are generated to HTML   comments
        //- Introducing a single line JavaScript comment with "//-" ensures the     comment isn't rendered to HTML

        p A line with a link
          a(href='/catalog/authors') Some link text
          |  and some extra text.

        #container.col
          if title
            p A variable named "title" exists.
          else
            p A variable named "title" does not exist.
          p.
            Pug is a terse and simple template language with a
            strong focus on performance and powerful features.

        h2 Generate a list

        ul
          each val in [1, 2, 3, 4, 5]
            li= val