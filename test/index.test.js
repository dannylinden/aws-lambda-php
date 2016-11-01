'use strict';

const expect = require( 'chai' ).expect;

const mainHandler = require( '../index' ).handler;

const LambdaTester = require( 'lambda-tester' );

describe( 'index.js', function() {

    it( 'handler', function(done) {

        let event = {
            eventTestKey: 'eventTestValue'
        };

        LambdaTester( mainHandler )
            .event( event )
            .expectSucceed( function( result ) {
                expect( result ).to.contain( 'string(33) "{"eventTestKey":"eventTestValue"}"' );
            }).verify(done);
    });
});