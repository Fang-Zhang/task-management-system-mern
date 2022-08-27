<h2>Problem Statement</h2>
    <ul>
      <li>To build a Task Management System (TMS) that emulates the Kanban approach.</li>
      <li>To facilitate the order of daily tasks in Agile and DevOps teams.</li>
      <li>Kanban board is an agile project management tool designed to help visualise work, limit work-in-progress, and maximise efficiency (or flow).</li>
      <li>Kanban uses cards, columns and continuous improvement to help technology and service teams commit to the right amount of work and complete tasks on time.</li>
    </ul>
    <h2>Objectives of the Task Management System</h2>
    <ul>
    <li>Identify and access control of an application.</li>
    <li>State transition with pre & post actions to be triggered for a workflow which is usually implemented in projects. E.g., Case management, eSOP, etc. The pre & post actions contain the process/business rules, constraints for the respective business workflows.</li>
    <li>REST API for system integration purposes.</li>
    <li>Containerize the NodeJS application and API.</li>
    </ul>
    <hr />
======================== Phase 1 Project : Basic User Management ========================
    <h3>Objectives of Phase 1:</h3>
    <ul>
      <li>Apply the CRUD (create, read, update, delete) concept to the database related function and features to be developed.</li>
      <li>Develop the Frontend and Backend aspect of the basic user management system.</li>
    </ul>

   <h4>N-Tier Architecture <b>MERN Stack):</b></h4>
    <ul>
      <li>MySQL Database</li>
      <li>ExpressJS and NodeJS</li>
      <li>ReactJS</li>
      <li>ReactJS and Bootstrap</li>
    </ul>

   <h4>Assumptions:</h4>
      <ul>
        <li>A user has a unique email and username.</li>
        <li>Username and email cannot have spaces.</li>
        <li>System is built for less than 30 users.</li>
      </ul>

   <h4>Persona:</h4>
    <ul>
      <li>Admin</li>
      <li>Normal User</li>
    </ul>

   <h4>User Stories:</h4>
    <ul>
      <li>Admin (Priiledged User):</li>
      <ul>
        <li>Create Accounts (Username*, Password*, Email, UserGroup(s), isActive)</li>
        <li>Update Accounts (Username*, Password, Email, UserGroup(s), isActive)</li>
        <li>Create a UserGroup <i>(E.g., Admin, Project Lead, Project Manager, Team Member, Software Engineer, etc.)</i></li>
        <li>Add User into UserGroup(s)</li>
        <li>Remove User into UserGroup(s)</li>
      </ul>
      <li>Normal User</li>
      <ul>
        <li>Update Own Credentials (Password or Email)</li>
      </ul>
    </ul>

   <h4>Password Requirements</h4>
    <ul>
      <li>Ensure that the password is not stored in clear text in the database which is a violation to security requirement. <i>bcrypt.js</i> was used to store the password. The hashed password will be compared for authentication purposes.</li>
      <li>Password must be between 8 - 10 characters</li>
      <li>Password must comprise alphabets, numbers and special characters</li>
    </ul>

   <h4>User Stories:</h4>
    <ul>
      <li>Admin (Priviledged User):</li>
      <ul>
        <li>Create Accounts (Username*, Password*, Email, UserGroup(s), isActive)</li>
        <i>Note: isActive is a Boolean value. If isActive = false, the specified username will be disabled and unable to login to his/her account.</i>
        <li>Update Accounts (Username*, Password, Email, UserGroup(s), isActive)</li>
        <li>Create a UserGroup <i>(E.g., Admin, Project Lead, Project Manager, Team Member, Software Engineer, etc.)</i></li>
        <li>Add User into UserGroup(s)</li>
        <li>Remove User into UserGroup(s)</li>
      </ul>
      <li>Normal User</li>
      <ul>
        <li>Update Own Credentials (Password or Email)</li>
      </ul>
    </ul>

   <h4>Password Requirements</h4>
    <ul>
      <li>Ensure that the password is not stored in clear text in the database which is a violation to security requirement. <i>bcrypt.js</i> was used to store the password. The hashed password will be compared for authentication purposes.</li>
      <li>Password must be between 8 - 10 characters</li>
      <li>Password must comprise alphabets, numbers and special characters</li>
    </ul>

======================= Phase 2 Project : Task Management Features =======================

<h3>Objectives of Phase 2:</h3>
<ul>
<li>Understand the workflow needed to implement the lifecycle of a "task" which is akin to any case management related system.</li>
<li>Understand the custom fields that are required to be captured as data to support the "task".</li>
<li>Understand the different pages which the custom fields shall be associated to as the interface to the system.</li>
<li>Understand how to implement the Task Management Features related to the specific state of the workflow in terms of acccess management, pre-validation, and post-action needed for the state transition to occur. (across multiple SQL tables for CRUD transactions).</li>
<li>User experience (UX) is important to ensure the ease of use and efficiency factor.</li>
</ul>

   <h4>Assumptions</h4>
    <ul>
      <li>Every user has an email.</li>
      <li>Editable Task Notes and Task Plan by permitted users.</li>
      <li>Application Running Number is a positive integer, i.e., >= 0</li>
      <li>Project Lead and Project Manager cannot be a Team Member, and vice versa.</li>
      <li>A Task can have no Plan, but a Task must be within an Application.</li>
    </ul>

   <h4>Requirements</h4>
    <ul>
      <li>
        Audit Trail (Read-Only Notes)
        <ul>
          <li>Login Username</li>
          <li>Current Task State</li>
          <li>Task Notes</li>
          <li>Date</li>
          <li>Timestamp</li>
        </ul>
      </li>
    </ul>

   <h4>Task States:</h4>
    <ol>
      <li>Open</li>
      <li>To Do</li>
      <li>Doing</li>
      <li>Done</li>
      <li>Close</li>
    </ol>

   <h4>Permits</h4>
    <ul>
      <li>
        Application Permit Create (App_permit_Create)
        <ul>
          <li>Permission to Create Task which defaults to 'Open' state. (usually Project Lead).</li>
        </ul>
      </li>
      <li>
        Application Permit Open (App_permit_Open)
        <ul>
          <li>Permission to Promote a Task from 'Open' to 'To Do' state. (usually Project Manager).</li>
        </ul>
      </li>
      <li>
        Application Permit To Do (App_permit_ToDoList)
        <ul>
          <li>Permission to Promote a Task from 'To Do' to 'Doing' state. (usually Team Member).</li>
          <li>Task can be demoted back to 'To Do' state.</li>
        </ul>
      </li>
      <li>
        Application Permit Doing (App_permit_Doing)
        <ul>
          <li>Permission to Promote a Task from 'Doing' to 'Done' state. (usually Team Member).</li>
          <li>When Team Member promotes Task to 'Done' state, an auto-generated email will be sent to the Project Lead to inform them about the completed task. This was performed using mailtrap.io via nodemailer.</li>
          <li>In reality, email delivery will be performed using EmailJS.</li>
        </ul>
      </li>
      <li>
        Application Permit Done (App_permit_Done)
        <ul>
          <li>Permission to Promote a Task from 'Done' to 'Close' state. (usually Project Lead).</li>
          <li>Task can be demoted back to 'Done' state.</li>
        </ul>
      </li>
    </ul>

   <h4>User Stories</h4>
    <ul>
      <li>
        Project Lead
        <ul>
          <li>Create Application</li>
          <li>Update Application</li>
          <li>Assign the respective Application Permits</li>
          <li>Create Task (dependent on App_permit_Create)</li>
        </ul>
      </li>
      <li>
        Project Manager
        <ul>
          <li>Create Plan</li>
        </ul>
      </li>
      <li>
        Team Member
        <ul>
          <li>Work on Tasks in 'To Do' and 'Doing' states. (dependent on App_permit_toDoList and App_permit_Doing)</li>
        </ul>
      </li>
    </ul>

==================== Phase 3 Project: Implement REST API for TMS ====================

<h3>Objectives of Phase 3:</h3>
    <ul>
      <li>Understand how REST API operates from the security and assessment aspect.</li>
      <li>Understand how REST API can be designed to be scalable.</li>
      <li>Utilising POSTMAN to perform GET and POST requests.</li>
    </ul>

<h4>CRUD Transactions</h4>
    <ul>
      <li>[POST] Create a new task. (method name = CreateTask)</li>
      <li>[GET] Retrieve tasks in a particular state. (method name = GetTaskbyState)</li>
      <li>[POST] Approve a task from "Doing" to "Done" state. (method name = PromoteTaskToDone)</li>
    </ul>

<h4>API Backend Routes</h4>
    <ul>
        <li>http://localhost:3002/api/create-new-task</li>
        <li>http://localhost:3002/api/get-task-by-state</li>
        <li>http://localhost:3002/api/promote-task-to-done</li>
    </ul>

======================= Phase 4 Project: Containerizing API =======================

<h4>Objectives of Phase 4:</h4>
    <ul>
        <li>Understand how to containerize the API using Dockerfile and relevant considerations.</li>
        <li>Understand how to reduce the size of the container image using a streamlined OS without affecting the function of the delivered API.</li>
    </ul>

<h4>Phase 4 Tasks</h4>
    <ul>
        <li>Created a docker-compose file to connect the frontend, backend and server in the same network.
        </li>
        <li>Assuming the user has MySQL workbench installed on the localhost machine, to run the backend API on POSTMAN, run the following commands:
            <ul>
                <li>Build the Node Image: <code>docker build -t backend .</code></li>
                <li>Start the backend_container: <code>docker run -p 3002:3002 -d --rm --name backend_container backend:latest</code></li>
                <li>Check backend_container logs (optional): <code>docker logs backend_container</code></li>
            </ul>
        </li>
    </ul>
    
======================= Areas of Improvement =======================
<h4>Areas of Improvement</h4>
    <ul>
        <li>Implement more advanced React Hooks</li>
        <li>Editable Table in Phase 1</li>
        <li>
        Add state dependencies in useEffect to minimise refreshing of the browser.
        <i>Note: This will be implemented in Phase 2 of the project : Task Management Features</i>
        </li>
    </ul>
