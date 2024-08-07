/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var dtypes = require( '@stdlib/ndarray-dtypes' );
var safeCasts = require( './../lib' );

// Get the list of supported ndarray data types:
var DTYPES = dtypes();

// Print the list of ndarray data types to which a data type can be safely cast...
var list;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
	list = safeCasts( DTYPES[ i ] );
	console.log( '%s: %s', DTYPES[ i ], list.join( ', ' ) );
}
