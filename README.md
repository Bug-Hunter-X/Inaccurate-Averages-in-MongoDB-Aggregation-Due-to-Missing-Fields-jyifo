# MongoDB Aggregation: Handling Missing Fields

This repository demonstrates a common, yet subtle, error in MongoDB aggregations: the impact of missing fields on the `$group` stage.  When using `$group`, documents with missing values for the grouping field are simply omitted from the aggregation's results.  This can lead to inaccurate averages or counts, especially when dealing with potentially incomplete data.

The `bug.js` file showcases the flawed aggregation pipeline, while `bugSolution.js` presents a corrected version that handles missing fields gracefully.

This issue can be easily overlooked and is a source of hard-to-debug anomalies.