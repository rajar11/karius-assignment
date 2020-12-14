# karius-assignment

1> Artifacts : There are two folders comitted to the repository karius-assignment for the user rajar11.
    
    Folders
    pathmgmt : This is a folder which holds all the server side code. There are stubs to define the REST API.
    client : This is a folder which all the client angular project. 

    One will have to pull it from git and build them.
    To run the client code indepently one do the following

    After the pulling source code down you can go to the client folder and run ng serve. This should start the Angular Live Development Server.
    If you use the browser and go to http://localhost:4200 you should see the main page of the App.

2> Design :

   This application is a client only app which is serving mock data using a local array.
   1> When one goes to the main page one can see all the previously created pathogens. Made an assumption that only 5 rows per page should shown and the user can go to the next page. Made an assumption that pathogen common name, pathogen scientific name, pathogen family will only be displayed on the table. Users will have to double click a row to see the row.
   2> On the main page there is a filter section. The user can filter using the pathogen common name and the genomic sequence. Assumption was made that it the common name the user would filter on.

   3> Under the filter section, there is a new pathogen button. On pressing the button the user will be shown a modal dialog box with all the entry text fields. The user is only allowed to import the genomic sequence from a file on the client machine's file system. This was an assumption that was made. Once the user hits the save button, validation will be performed whether the all the required fields have been specified. If not the save will not happen.  On successful save, the new row should be added to the local data source and the user can paginate to see the new row.

   4> Update operation : Assumption was made that rather than have an edit button for each row in the table, user will double click the row. This should open a modal dialog box which displays all the fields in read only mode. The user would have to go into edit mode by pressing the edit button. Assumption was made that only pathogen family, pathogen viral factor, pathogen annotation, pathogen clinical symptoms can only be updated. Again validation will be performed before a save is allowed. On save the row in the local array is updated with the changes.

3> Server Side Design
  The pathmgmt folder contains all the spring boot server side code. There is a controller defined which stubs the REST API.

  My thoughts are the following API endpoints need to exist

  GET - For getting list of pathogen rows using filter, sort and pagination
  https://<domain-name>/pathogenmanagement/api/<version>/pathogens?pathogenCommonName=<filterValue>&pathogenSequence=<filterValue>&sortOrder=<ASC/DESC>&pageNumber=<number>&pageSize=<pageSize>
  https://<domain-name>/pathogenmanagement/api/<version>/pathogens/<pathogenCommonName>

  POST - For create new pathogen resource
  https://<domain-name>/pathogenmanagement/api/<version>/pathogens

  PUT - For updating an existing pathogen resource
  https://<domain-name>/pathogenmanagement/api/<version>/pathogens/<pathogenCommonName>

  POST/PUT - For uploading a new genome sequence file 
  https://<domain-name>/pathogenmanagement/api/<version>/pathogens/<pathogenCommonName>/file

  One can download the source code and build it using maven or import the project into IntelliJ.

4> Deployment

  The application is currently being hosted on firebase and can be accessed by the following link

  https://kariusassignment.web.app/

  Otherways

  1> Pull the source of the client from github.
  2> Install lite-server using npm.
  3> Under the client directory run
     ng build --watch
  4> In another session run
     lite-server --baseDir="dist/pathmgmt"
  5> You can access the app at
     http://localhost:3000

5> Answer to Question 1:
  For storing genomic sequences I would suggest datatypes like BLOB or CLOB which can hold upto 2-4GB of data on SQL databases. There are also wide column databases like Cassandra, HBase. For upload of the genomic sequence I would suggest we always do it as a file upload. We can always upload the file in chunks. If we need to download the data, I would suggest the same approach. The download would depend on whether the user needs to see the whole genomic sequence.
  If thousands of users are trying to access the system then I would suggest horizontally scaling the system backed by a clustered database like cassandra. I would suggest microservices such that there is microservice for creating new pathogens which viewing and updating can be handled other services.

6> Answer to Question 2:
 On the mobile device we may need to change the way the previous uploaded pathogens are listed. We can keep the tabular form and on the mobile device hide some of the columns if the user changes the orientation of the phone to potrait. The other way is we change it to a list view display a list of cards. On the mobile device, one may need to design different screens for different size mobile devices. One may need to think of ways to give users hints on what to do since tooltip functionality may not work on mobile device. One may need to think on how the genomic sequence files are going to be put on the mobile device so that they can be uploaded via the app. One may need to take into consideration bandwidth on deciding on how to upload these large genomic sequence files. Also need to consider what to do if there are drops in connections on cellular.
   
