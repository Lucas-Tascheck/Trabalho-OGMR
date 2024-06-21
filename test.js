import snmp from "snmp-native"

const host = '172.17.0.1';
const port = 161; 
community = "private"

const oid = [1, 3, 6, 1, 2, 1, 1, 5, 0];

const session = new snmp.Session({ host, port, community });

session.get({ oid: oid }, function (error, varbinds) {
    if (error) {
        console.log('Fail :(');
    } else {
        console.log(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
    }
    session.close();
});
