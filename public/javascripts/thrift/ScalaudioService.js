//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

ScalaudioService_transmit_double_args = function(args) {
  this.handle = null;
  this.value = null;
  if (args) {
    if (args.handle !== undefined && args.handle !== null) {
      this.handle = args.handle;
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
  }
};
ScalaudioService_transmit_double_args.prototype = {};
ScalaudioService_transmit_double_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.handle = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.value = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ScalaudioService_transmit_double_args.prototype.write = function(output) {
  output.writeStructBegin('ScalaudioService_transmit_double_args');
  if (this.handle !== null && this.handle !== undefined) {
    output.writeFieldBegin('handle', Thrift.Type.STRING, 1);
    output.writeString(this.handle);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ScalaudioService_transmit_double_result = function(args) {
};
ScalaudioService_transmit_double_result.prototype = {};
ScalaudioService_transmit_double_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ScalaudioService_transmit_double_result.prototype.write = function(output) {
  output.writeStructBegin('ScalaudioService_transmit_double_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ScalaudioServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ScalaudioServiceClient.prototype = {};
ScalaudioServiceClient.prototype.transmit_double = function(handle, value, callback) {
  if (callback === undefined) {
    this.send_transmit_double(handle, value);
  } else {
    var postData = this.send_transmit_double(handle, value, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_transmit_double);
  }
};

ScalaudioServiceClient.prototype.send_transmit_double = function(handle, value, callback) {
  this.output.writeMessageBegin('transmit_double', Thrift.MessageType.ONEWAY, this.seqid);
  var args = new ScalaudioService_transmit_double_args();
  args.handle = handle;
  args.value = value;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};
