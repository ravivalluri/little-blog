db = db.getSiblingDB('littleblog');

db.createUser({
  'user': 'local-user',
  'pwd': 'local-user-password',
  'roles': [
    {
      'role': 'readWrite',
      'db': 'littleblog'
    }
  ]
});
