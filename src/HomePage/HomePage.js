import React, { Component } from 'react';
import '../index.css';
import '../App.js'

const styles = {
    main: {
        position: 'relative',
        fontSize: '150px',
        marginLeft: '400px',
        marginTop: '-35px'
    },

    welc1: {
        position: 'relative',
        fontSize: '40px',
        color: '#F9F273',
        marginLeft: '375px',
    },

    welc2: {
        position: 'relative',
        fontSize: '40px',
        color: '#6A74E5',
        marginLeft: '170px',
    },

    marg: {
        marginTop: '283px',
    },   
};

export default class HomePage extends Component {
	render (){
	  	return (
		    <div>
		    	<p style={styles.main}>
		  	  		DashBoard</p>
			  	<p style={styles.welc1}>
			  	  	Hello and welcome this beautiful react site!</p>
			  	<p style={styles.welc2}>
			  		You can see here the list of users and the ToDo list for you interests</p>
			  	<p style={styles.marg}>
			  		.</p>
		    </div>
		)    
	}
}	