////////////// DeleteTrack ///////////////////////
'use strict';

// Added to handle injection
const vandium = require( 'vandium' );
const mysql   = require('mysql');

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  var sql = "DELETE FROM track WHERE id = " + connection.escape(event.track_id);

  connection.query(sql, function (error, results, fields) {
	console.log('Deletetrack Results: ', results);
	let response = {};
  	response['deleted'] = event.track_id;
  	console.log('Deletetrack Response: ${response}');

	callback( null, response );

  });
})