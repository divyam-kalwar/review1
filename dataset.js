const complexData = {
    id: 5001,                                         // value 1
    name: "Complex Data Structure",                   // value 2
    meta: {
      createdAt: "2025-04-11T10:00:00Z",              // value 3
      tags: ["advanced", "nested", "data"],           // value 4 (each tag counts as a distinct string)
      version: 3.2                                    // value 5
    },
    statistics: {                                     // Nested object
      views: 1024,                                    // value 6
      likes: 256,                                     // value 7
      shares: 128                                     // value 8
    },
    items: [                                          // Array containing multiple objects
      {
        type: "article",                            // value 9
        title: "Nested Objects in JS",              // value 10
        details: {
          author: "Jane Smith",                     // value 11
          length: 3500,                             // value 12
          topics: ["JS", "Advanced", "Recursion"]     // value 13 (each topic as distinct value)
        }
      },
      {
        type: "video",                              // value 14
        title: "Asynchronous Programming",          // value 15
        details: {
          duration: 420,                            // value 16
          quality: "1080p"                          // value 17
        }
      }
    ],
    nestedArray: [                                    // Deeply nested array structure
      [1, 2, 3],                                      // value 18 (group of numbers)
      [
        { key: "a", value: "alpha" },                 // value 19
        { key: "b", value: "beta" }                   // value 20
      ],
      [
        [
          "deep", "nested", "array"                  // values 21, 22, 23
        ]
      ]
    ],
    extra: {
      info: {
        notes: "Contains multiple data types",       // value 24
        flags: {
          isActive: true,                             // value 25
          isVerified: false                           // value 26
        }
      },
      schedule: [
        { day: "Monday", event: "Meeting" },          // value 27, 28
        { day: "Tuesday", event: "Workshop" }         // value 29, 30
      ]
    }
  };
  
  // console.log(complexData);

module.exports = complexData; 

  