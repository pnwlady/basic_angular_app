const express = require('express')().use(require('express').static(__dirname + '/build')).listen(4020, () => { console.log('server up'); });
