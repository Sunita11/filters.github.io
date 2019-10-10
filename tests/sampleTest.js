module.exports = {
    'Sample e2e test': function(client){
        client
        .url('http://localhost:7777/')
        .waitForElementVisible('body',1000)
        .assert.title('clarisight assignment')
        .assert.visible('h4')
        .assert.containsText('h4','where')
        .end();
    }
}