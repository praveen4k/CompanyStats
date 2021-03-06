/*
 * File: app/store/StockDataStore.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ComStat.store.StockDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ComStat.model.StockData'
    ],

    config: {
        autoLoad: true,
        model: 'ComStat.model.StockData',
        storeId: 'StockDataStore',
        proxy: {
            type: 'ajax',
            url: 'http://localhost:4000/api/stock-data-1.json',
            reader: {
                type: 'json'
            }
        }
    }
});