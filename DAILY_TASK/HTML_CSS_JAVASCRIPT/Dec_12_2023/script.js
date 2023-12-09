// P1 Nested for loops
//  Outer Loops
// for(var i = 1; i <= 3; i++)
// {
// document.write(i, "<br>"); // will execute 3 times.
// // Inner for loop.
// for(var j = 1; j <= 4; j++)
// {
// document.write(j, " "); // will execute 12 (3 * 4) times.
// }
// document.write("<br>");
// }

// Tables using nested loops
// let i, j;
// document.write("Tables:", "<br>");
// // Outer for loop.
// for(i = 1; i <= 2; i++)
// {
// // Inner for loop.
// for(j = 1; j <= 10; j++)
// {
// document.write(i+ " * " +j+" = "+ (i*j), "<br>");
// }
// document.write("");
// document.write("Tables:", "<br>");
// }

// P3 Triangle Numbers
// let i, j;
// document.write("Displaying a triangle of numbers:", "<br>");
// // Outer for loop.
// for(i = 1; i <= 5; i++)
// {
// // Inner for loop.
// for(j = 1; j <= i; j++)
// {
// document.write(j);
// }
// document.write("<br>");
// }

// P4 Right angle triangle
    let i, j;
    document.write("Displaying a triangle of numbers:", "<br>");
    let k = 1;
    // Outer for loop.
    for(i = 1; i <= 5; i++)
    {
        // Inner loops
        for(j = 1; j<=i; j++)
        {
            document.write(k);
        }
        document.write("<br>");
        k++;
    }

    // let i, j;
    // document.write("Displaying Right Triangle Pattern:", "<br>");
    // // Outer for loop.
    // let k = 1;
    // for(i = 1; i <= 5; i++)
    // {
    // // Inner for loop.
    // for(j = 1; j <= i; j++)
    // {
    // document.write(k);
    // }
    // document.write("<br>");
    // k++;
    // }

 

