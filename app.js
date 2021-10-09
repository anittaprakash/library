const express =require('express');
const app=express();

const nav=[
    {
        link:'/signup',name:'signup'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/books',name:'books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    
    {
        link:'/',name:'Logout'
    }
    
];

const booksRouter=require('./src/routes/booksRoutes')(nav);
const authorsRouter=require('./src/routes/authorsRoutes')(nav);

const adminRouter=require('./src/routes/adminRoutes')(nav);

const signupRouter=require('./src/routes/signupRoutes')(nav);
// const loginRouter=require('./src/routes/loginvalid')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);


app.use(express.static('./public'));


app.set('view engine','ejs');
app.set('views','./src/view');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);



// app.use('/secondpage',loginRouter);

app.get('/',function(req,res){
   
    res.render("index",
    {
       
        nav,
        title:'Library'    
    });

});





app.listen(8080);
