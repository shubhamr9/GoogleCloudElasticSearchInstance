


var elasticsearch = require('elasticsearch');

var hostlink = 'http://104.197.42.69:80/elasticsearch/';

var client = new elasticsearch.Client({
  host: hostlink
});

var result = client.index({
  index: 'my_index',
  type: 'posts',
  id: '1',
  body: {
    user: 'me',
    post_date: new Date(),
    message: 'trying out facetflow'
  },
  refresh: true
});

result = result.then(function() {
  return client.search({
    index: 'my_index',
    type: 'posts',
    body: {
      query: {
        filtered: {
          query: {
            query_string: {
              query: 'trying out facetflow'
            }
          },
          filter: {
            term: { user: 'me' }
          }
        }
      }
    }
  });
});

result.then(function(d) {
  console.log(JSON.stringify(d));
});