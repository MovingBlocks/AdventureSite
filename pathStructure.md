# Path Structure for the Roles -

### Paths : Stepwise resources a user follows according to the role.

## Role : The Terasology Foundation works in various fields with various tech stacks and there are a lot of ways to contribute.
- Example Roles - Player, Modder, Artist, etc.

---

## Sub-Role : Sub role is a specific type of role. (in a particular Role)
- Example Sub-Roles -  Artist Role has Sub-Roles like - 1. 2D/3D Artist 2. Sound Artists, etc.

---

## Path Structure -

- The path structure is common for roles and sub-roles.
- It is written in a JSON Schema which is wrapped in a Jsx function (similar to react).
- The roles are nested inside their parent Roles.

### Schema - 

```
{
  'user-responses': [ // user-responses is a array of responses which are given to user in Adventure. 
          {
          // This is a user response 1
          // Response Object Type : This object is an Intermediate object.

            name: "This is a text property which will appear in user chat box",     // The name is a text property and it will get added to the user response box.  
            child: ChildRole,                                                       // Child is some another Role. 
                                                                                    // This role is served to user on clicking this response.     
                                                                                    // The data for child role is written in another file.    
          },
  
          {
          // This is a user response 2
          // Response Object Type : This object is an Resource object.
          
          "name":"This is a text property which will appear in user chat box",    // The name is a text property and it will get added to the user response box.  
          "link": "https://example.com"                                           // This property must contain a valid link for resouce.
 
          },
  ],
  
  'gooey-response': { gooey: "This line defines the gooey responce." },           // The text shown in gooey's chat box.
}

```
## Terms used in above mentioned Schema :

**1. user-responses -** This is a JSON array which holds Response-Objects.

**2. Response Object -** This is a JSON Object which holds data for a response. 

**3. name -** `name` JSON attribute that indicates the text which we see in user response.

**4. child -** `child` is a JSON attribute that acts as a call to another (sub) Role. This role is accessed when a user clicks on the response.

**5. link -** It contains a link which gets opened in a new tab when a user clicks on the response. 

> Note - An Response Object must not contain child and link at the same time. i.e. It should either contain a resource link or next sub-role call.

---

# Example -

### Example Schema - 

```
{
   "user-responses":[
      {
         "name":"Tell me more",
         "link":"https://terasology.org/about.html"
      },
      {
         "name":"I wish to join the Community Discord Channel",
         "link":"https://github.com/MovingBlocks/Terasology/wiki#communication"
      }
   ],
   "gooey-response":{
      "gooey":"Terasology is a super extensible open source voxel-based game. Born from a Minecraft-inspired tech demo, it is gradually becoming a stable platform for all sorts of gameplay settings in a voxel world."
   }
}
```

### Output - 

![]("./SchemaDemo.jpg")
