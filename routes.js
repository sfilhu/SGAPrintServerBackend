'use strict';
const routes  = require('express').Router();
const uniqid  = require('uniqid');
const print   = require('./print');
const formatDate = require('./print/format-date.js');
const ip = require('ip').address();


function removerAcentos( newStringComAcento ) {
  var string = newStringComAcento;
	var mapaAcentosHex 	= {
		a : /[\xE0-\xE6]/g,
		e : /[\xE8-\xEB]/g,
		i : /[\xEC-\xEF]/g,
		o : /[\xF2-\xF6]/g,
		u : /[\xF9-\xFC]/g,
		c : /\xE7/g,
		n : /\xF1/g
	};

	for ( var letra in mapaAcentosHex ) {
		var expressaoRegular = mapaAcentosHex[letra];
		string = string.replace( expressaoRegular, letra );
	}

	return string;
}


// 
//  GET
// 
routes.get('/cupons', async (req, res) => {
    return res.json({ ip })
}); 


// 
//  POST
// 
routes.post('/cupons', async (req, res) => {
    const { ligasEventos, aposta, usuario, observacao, url, qrcode, hash } = req.body;
    //console.log(req.body);
    const data = await ligasEventos.map( item => [
        { text: `\n[ ${removerAcentos(item.nome_liga)} ]`.substring(0, 42), align:"LEFT", width: 1},
        { text: `\n${formatDate(item.data_evento)}`, align:"LEFT", width: 0.99 },
        { text: `\n${removerAcentos(item.times)}`, align:"LEFT", width: 0.99 },
        { text: `\n${item.nome}`, align:"LEFT", width: 0.99 },
	{ text: `\n${item.descricao_odd} [${item.multiplicador_odd}]`, align:"LEFT", width: 0.99 },
        { text: `\n-----------------------------`, align:"LEFT", width: 0.99 }
    ])

    let newligasEventos = [];

    for( let i = 0; i < data.length; i++) {
        newligasEventos = newligasEventos.concat(data[i])
    }
    const cupom = await { 
        id : uniqid(), 
        data: newligasEventos, 
        aposta,
        usuario,
        observacao,
        url,
        hash,
        qrcode,
        lengthEvents: ligasEventos.length,
        createAt: Date()
    }
    
    print(cupom)
    return res.json(req.body)
    
});


// 
//  DELETE
// 
routes.delete('/cupons/:id', async (req, res) => {
    const { id } = req.params;
    const newStorage = [].filter( item => item.id != id)
    return res.json({ 'cupons': newStorage })
})

module.exports = routes;
