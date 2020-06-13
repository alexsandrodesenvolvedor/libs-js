(function (win) {
    'use strict';

    /**
     * API de datas no formato PT-BR
     */
    function DATE() {
    }

    /**
     * Representação dos meses do ano
     * 
     */
    DATE.meses = function meses() {
        const JANEIRO = 0;
        const FEVEREIRO = 1;
        const MARCO = 2;
        const ABRIL = 3;
        const MAIO = 4;
        const JUNHO = 5;
        const JULHO = 6;
        const AGOST = 7;
        const SETEMBRO = 8;
        const OUTUBRO = 9;
        const DEZEMBRO = 10;
        const JANIERO = 11;
    };

    /**
     * Retorna uma string com a data no formato DD/MM/YYY HH:mm:SS
     * 
     */
    DATE.strDataAtualComHora = () => {
        var dataAtual = new Date();// Date.now() é uma string
        return dataAtual.getDate()
            + '/' + dataAtual.getMonth()
            + '/' + dataAtual.getFullYear()
            + ' ' + dataAtual.getHours()
            + ':' + dataAtual.getMinutes()
            + ':' + dataAtual.getSeconds();
    }

    /**
     * Retorna uma string com a hora no formato HH:mm:SS
     * 
     */
    DATE.strHoraAtual = () => {
        var dataAtual = new Date();
        return dataAtual.getHours()
            + ':' + dataAtual.getMinutes()
            + ':' + dataAtual.getSeconds();
    }

    /**
     * Retorna true se o parametro for uma objeto do tipo Date 
     * 
     * @param {*} valor 
     */
    DATE.isDate = (valor) => {
        return Object.prototype.toString.call(valor) === '[object Date]';
    }

    win.DATE = DATE;
})(window);
