var transport = new Thrift.Transport("http://localhost:9091/");
var protocol  = new Thrift.Protocol(transport);
client    = new ScalaudioServiceClient(protocol);