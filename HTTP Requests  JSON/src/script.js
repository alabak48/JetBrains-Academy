function displayTeachers() {
        
    // Our JSON data
    let data = 
       {
       "teachers" : [
       { 
        "teachersname" : "John",
        "born" : "1979"
       },
      { 
       "teachersname" : "Joe",
       "born" : "1983" 
      },
      { 
       "teachersname" : "Jenny",
       "born" : "1991"
      }
                    ]
      }
      
      // Put the data into a variable and format with HTML tags
      let output = "<h1>Artists</h1>";
      output += "<ul>";    
      C
      // Loop through the artists
      for (let i in data.teachers) {
          output += "<li>" + data.teachers[i].teachersname + " (Born: " + data.teachers[i].born + ")</li>"; 
      }
      
      output += "</ul>";
  
      // Output the data to the "artistList" element
      document.getElementById("teachersList").innerHTML=output;
  }    
  
  // Load the above function when the window loads
  window.onload = displayTeachers;