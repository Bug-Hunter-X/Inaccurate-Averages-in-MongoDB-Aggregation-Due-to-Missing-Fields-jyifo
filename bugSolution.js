```javascript
// Corrected Aggregation Pipeline
db.users.aggregate([
  {
    $match: { age: { $gt: 25 } }
  },
  {
    $group: {
      _id: { $ifNull: [ "$city", "Unknown" ] },
      averageAge: { $avg: "$age" }
    }
  },
  {
    $sort: { averageAge: -1 }
  }
]);
```
This revised pipeline uses `$ifNull` to replace missing `city` values with "Unknown". This ensures that all documents contribute to the average age calculation and makes the results more robust and accurate.