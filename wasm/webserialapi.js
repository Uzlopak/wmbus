/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of
 * the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in
 * writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing
 * permissions and limitations under the License.
 */

/**
 * @typedef {"in" | "out"} USBDirection
 */

/**
 * @typedef {"bulk" | "interrupt" | "isochronous"} USBEndpointType
 */

/**
 * @typedef {"standard" | "class" | "vendor"} USBRequestType
 */

/**
 * @typedef {"device" | "interface" | "endpoint" | "other"} USBRecipient
 */

/**
 * @typedef {"ok" | "stall" | "babble"} USBTransferStatus
 */


/**
 * @typedef {object} USBInterface
 * @property {number} interfaceNumber
 * @property {USBAlternateInterface} alternate
 * @property {USBAlternateInterface[]} alternates
 * @property {boolean} claimed
 */

/**
 * @typedef {Object} USBEndpoint
 * @property {number} endpointNumber
 * @property {USBDirection} direction
 * @property {USBEndpointType} type
 * @property {number} packetSize
 */

/**
 * @typedef {Object} USBControlTransferParameters
 * @property {USBRequestType} requestType
 * @property {USBRecipient} recipient
 * @property {number} request
 * @property {number} value
 * @property {number} index
 */

/**
 * @typedef {Object} USBDeviceFilter
 * @property {number} [vendorId]
 * @property {number} [productId]
 * @property {number} [classCode]
 * @property {number} [subclassCode]
 * @property {number} [protocolCode]
 * @property {string} [serialNumber]
 */

/**
 * @typedef {Object} USBDeviceRequestOptions
 * @property {USBDeviceFilter[]} filters
 * @property {USBDeviceFilter[]} [exclusionFilters]
 */

/**
 * @typedef {Object} USBConnectionEventInit
 * @property {USBDevice} device
 */

/**
 * @typedef {Object} USBConfiguration
 * @property {number} configurationValue
 * @property {string|null} configurationName
 * @property {USBInterface[]} interfaces
 */

/**
 * @typedef {Object} USBAlternateInterface
 * @property {number} alternateSetting
 * @property {number} interfaceClass
 * @property {number} interfaceSubclass
 * @property {number} interfaceProtocol
 * @property {string|null} interfaceName
 * @property {USBEndpoint[]} endpoints
 */

/**
 * @typedef {Object} USBInTransferResult
 * @property {DataView|undefined} data
 * @property {USBTransferStatus} status
 */

/**
 * @typedef {Object} USBOutTransferResult
 * @property {number} bytesWritten
 * @property {USBTransferStatus} status
 */

/**
 * @typedef {Object} USBIsochronousInTransferPacket
 * @property {DataView|undefined} data
 * @property {USBTransferStatus} status
 */

/**
 * @typedef {Object} USBIsochronousInTransferResult
 * @property {DataView|undefined} data
 * @property {USBIsochronousInTransferPacket[]} packets
 */

/**
 * @typedef {Object} USBIsochronousOutTransferPacket
 * @property {number|undefined} bytesWritten
 * @property {USBTransferStatus} status
 */

/**
 * @typedef {Object} USBIsochronousOutTransferResult
 * @property {USBIsochronousOutTransferPacket[]} packets
 */

/**
 * @typedef {Object} USBConnectionEvent
 * @extends {Event}
 * @property {USBDevice} device
 */

/**
 * @typedef {Object} USB
 * @extends {EventTarget}
 * @property {((this: USB, ev: USBConnectionEvent) => any)|null} onconnect
 * @property {((this: USB, ev: USBConnectionEvent) => any)|null} ondisconnect
 * @property {function(): Promise<USBDevice[]>} getDevices
 * @property {function(USBDeviceRequestOptions=): Promise<USBDevice>} requestDevice
 * @property {function(string, function(this: USB, ev: USBConnectionEvent): any, boolean|AddEventListenerOptions=): void} addEventListener
 * @property {function(string, function(this: USB, ev: USBConnectionEvent): any, boolean|EventListenerOptions=): void} removeEventListener
 */

/**
 * @typedef {Object} USBDevice
 * @property {number} usbVersionMajor
 * @property {number} usbVersionMinor
 * @property {number} usbVersionSubminor
 * @property {number} deviceClass
 * @property {number} deviceSubclass
 * @property {number} deviceProtocol
 * @property {number} vendorId
 * @property {number} productId
 * @property {number} deviceVersionMajor
 * @property {number} deviceVersionMinor
 * @property {number} deviceVersionSubminor
 * @property {string|null} manufacturerName
 * @property {string|null} productName
 * @property {string|null} serialNumber
 * @property {USBConfiguration|null} configuration
 * @property {USBConfiguration[]} configurations
 * @property {boolean} opened
 * 
 * @property {function(): Promise<void>} open
 * @property {function(): Promise<void>} close
 * @property {function(): Promise<void>} forget
 * @property {function(number): Promise<void>} selectConfiguration
 * @property {function(number): Promise<void>} claimInterface
 * @property {function(number): Promise<void>} releaseInterface
 * @property {function(number, number): Promise<void>} selectAlternateInterface
 * @property {function(USBControlTransferParameters, number): Promise<USBInTransferResult>} controlTransferIn
 * @property {function(USBControlTransferParameters, BufferSource=): Promise<USBOutTransferResult>} controlTransferOut
 * @property {function(USBDirection, number): Promise<void>} clearHalt
 * @property {function(number, number): Promise<USBInTransferResult>} transferIn
 * @property {function(number, BufferSource): Promise<USBOutTransferResult>} transferOut
 * @property {function(number, number[]): Promise<USBIsochronousInTransferResult>} isochronousTransferIn
 * @property {function(number, BufferSource, number[]): Promise<USBIsochronousOutTransferResult>} isochronousTransferOut
 * @property {function(): Promise<void>} reset
 */

/**
 * @typedef {Object} SerialPortInfo
 * @property {number} usbVendorId The USB vendor ID of the device.
 * @property {number} usbProductId The USB product ID of the device.
 */

/**
 * Configuration options for a serial port.
 *
 * @typedef {Object} SerialOptions
 * @property {number} baudRate - Baud rate (enforced to an unsigned 32-bit range).
 * @property {number} [dataBits=8] - Number of data bits per character (0–255). Default 8.
 * @property {number} [stopBits=1] - Number of stop bits (0–255). Default 1.
 * @property {ParityType} [parity="none"] - Parity checking mode. Default "none".
 * @property {number} [bufferSize=255] - Size of the internal buffer in bytes (0–255). Default 255.
 * @property {FlowControlType} [flowControl="none"] - Flow control mechanism. Default "none".
 */

/**
 * Represents the output signal states for a serial port.
 *
 * @typedef {Object} SerialOutputSignals
 * @property {boolean} dataTerminalReady - State of the Data Terminal Ready (DTR) signal.
 * @property {boolean} requestToSend - State of the Request to Send (RTS) signal.
 * @property {boolean} break - State of the break signal.
 */

/** @typedef {string} BluetoothServiceUUID */

/**
 * Filter criteria for selecting a serial port.
 *
 * @typedef {Object} SerialPortFilter
 * @property {number} [usbVendorId] - USB vendor ID (16-bit unsigned integer).
 * @property {number} [usbProductId] - USB product ID (16-bit unsigned integer).
 * @property {BluetoothServiceUUID} [bluetoothServiceClassId] - Bluetooth service class ID (e.g., a UUID string or 16/32-bit integer).
 */

/**
 * Options for requesting a serial port.
 *
 * @typedef {Object} SerialPortRequestOptions
 * @property {SerialPortFilter[]} filters - A list of filters to restrict the set of serial ports presented to the user.
 * @property {BluetoothServiceUUID[]} allowedBluetoothServiceClassIds - Allowed Bluetooth service class IDs (UUIDs) for ports connecting via RFCOMM.
 */

/**
 * @interface Navigator
 * @property {USB} usb
 */

/**
 * @interface WorkerNavigator
 * @property {USB} usb
 */


const SerialPolyfillProtocol = /** @type {const} */ ({
  UsbCdcAcm: 'UsbCdcAcm'
})

/** @typedef {{UsbCdcAcm: 'UsbCdcAcm'}} SerialPolyfillProtocol */

/**
 * @typedef {Object} SerialPolyfillOptions
 * @prop {SerialPolyfillProtocol} [protocol]
 * @prop {number} [usbControlInterfaceClass]
 * @prop {number} [usbTransferInterfaceClass]
 */

const kSetLineCoding = 0x20;
const kSetControlLineState = 0x22;
const kSendBreak = 0x23;

const kDefaultBufferSize = 255;
const kDefaultDataBits = 8;
const kDefaultParity = 'none';
const kDefaultStopBits = 1;

const kAcceptableDataBits = [16, 8, 7, 6, 5];
const kAcceptableStopBits = [1, 2];
const kAcceptableParity = ['none', 'even', 'odd'];

const kParityIndexMapping = /** @type {const} */ (['none', 'odd', 'even']);
/** @typedef {typeof kParityIndexMapping[number]} ParityType */

const kStopBitsIndexMapping = [1, 1.5, 2];
/** @typedef {typeof kStopBitsIndexMapping[number]} StopBitsType */

const kFlowControlTypes = /** @type {const} */ (['none', 'hardware']);
/** @typedef {typeof kFlowControlTypes[number]} FlowControlType */

const kDefaultPolyfillOptions = /** @type {const} */ ({
  protocol: SerialPolyfillProtocol.UsbCdcAcm,
  usbControlInterfaceClass: 2,
  usbTransferInterfaceClass: 10,
});

/**
 * Utility function to get the interface implementing a desired class.
 * @param {USBDevice} device The USB device.
 * @param {number} classCode The desired interface class.
 * @returns {USBInterface} The first interface found that implements the desired
 * class.
 * @throws TypeError if no interface is found.
 */
function findInterface(device, classCode) {
  const configuration = device.configurations[0];
  for (const iface of configuration.interfaces) {
    const alternate = iface.alternates[0];
    if (alternate.interfaceClass === classCode) {
      return iface;
    }
  }
  throw new TypeError(`Unable to find interface with class ${classCode}.`);
}

/**
 * Utility function to get an endpoint with a particular direction.
 * @param {USBInterface} iface The interface to search.
 * @param {USBDirection} direction The desired transfer direction.
 * @returns {USBEndpoint} The first endpoint with the desired transfer direction.
 * @throws TypeError if no endpoint is found.
 */
function findEndpoint(iface, direction) {
  const alternate = iface.alternates[0];
  for (const endpoint of alternate.endpoints) {
    if (endpoint.direction == direction) {
      return endpoint;
    }
  }
  throw new TypeError(`Interface ${iface.interfaceNumber} does not have an ` +
    `${direction} endpoint.`);
}

/**
 * Implementation of the underlying source API[1] which reads data from a USB
 * endpoint. This can be used to construct a ReadableStream.
 *
 * [1]: https://streams.spec.whatwg.org/#underlying-source-api
 * @implements UnderlyingByteSource
 */
class UsbEndpointUnderlyingSource {
  /** @type {USBDevice} */
  #device;
  /** @type {USBEndpoint} */
  #endpoint;
  /** @type {() => void } */
  #onError;

  /** @type {'bytes'} */
  type = 'bytes';

  /**
   * Constructs a new UnderlyingSource that will pull data from the specified
   * endpoint on the given USB device.
   *
   * @param {USBDevice} device
   * @param {USBEndpoint} endpoint
   * @param {() => void} onError function to be called on error
   */
  constructor(device, endpoint, onError) {
    this.type = 'bytes';
    this.#device = device;
    this.#endpoint = endpoint;
    this.#onError = onError;
  }

  /**
   * Reads a chunk of data from the device.
   *
   * @param {ReadableByteStreamController} controller
   * @returns {Promise<void>}
   */
  async pull(controller) {
    (async () => {
      let chunkSize;
      if (controller.desiredSize) {
        const d = controller.desiredSize / this.#endpoint.packetSize;
        chunkSize = Math.ceil(d) * this.#endpoint.packetSize;
      } else {
        chunkSize = this.#endpoint.packetSize;
      }

      try {
        const result = await this.#device.transferIn(
          this.#endpoint.endpointNumber, chunkSize);
        if (result.status != 'ok') {
          controller.error(`USB error: ${result.status}`);
          this.#onError();
        }
        if (result.data?.buffer) {
          const chunk = new Uint8Array(
            result.data.buffer, result.data.byteOffset,
            result.data.byteLength);
          controller.enqueue(/** @type {*} */(chunk));
        }
      } catch (error) {
        controller.error(/** @type {*} */(error).toString());
        this.#onError();
      }
    })();
  }
}

/**
 * Implementation of the underlying sink API[2] which writes data to a USB
 * endpoint. This can be used to construct a WritableStream.
 *
 * [2]: https://streams.spec.whatwg.org/#underlying-sink-api
 * @implements {UnderlyingSink<Uint8Array>}
 */
class UsbEndpointUnderlyingSink {
  /** @type {USBDevice} */
  #device;
  /** @type {USBEndpoint} */
  #endpoint;
  /** @type {() => void} */
  #onError;

  /**
   * Constructs a new UnderlyingSink that will write data to the specified
   * endpoint on the given USB device.
   *
   * @param {USBDevice} device
   * @param {USBEndpoint} endpoint
   * @param {() => void} onError function to be called on error
   */
  constructor(device, endpoint, onError) {
    this.#device = device;
    this.#endpoint = endpoint;
    this.#onError = onError;
  }

  /**
   * Writes a chunk to the device.
   *
   * @param {Uint8Array} chunk
   * @param {WritableStreamDefaultController} controller
   * @returns {Promise<void>}
   */
  async write(
    chunk,
    controller) {
    try {
      const result =
        await this.#device.transferOut(this.#endpoint.endpointNumber, /** @type {*} */(chunk));
      if (result.status != 'ok') {
        controller.error(result.status);
        this.#onError();
      }
    } catch (error) {
      controller.error(/** @type {*} */(error).toString());
      this.#onError();
    }
  }
}

/** a class used to control serial devices over WebUSB */
class SerialPort {
  /** @type {SerialPolyfillOptions | typeof kDefaultPolyfillOptions} */
  #polyfillOptions;
  /** @type {USBDevice} */
  #device;
  #controlInterface;
  #transferInterface;
  /** @type {USBEndpoint} */
  #inEndpoint;
  /** @type {USBEndpoint} */
  #outEndpoint;

  /** @type {SerialOptions} */
  #serialOptions = {
    baudRate: 9600,
  };
  /** @type {ReadableStream<Uint8Array> | null} */
  #readable = null;
  /** @type {WritableStream<Uint8Array> | null} */
  #writable = null;
  /** @type {SerialOutputSignals} */
  #outputSignals;

  /**
   * constructor taking a WebUSB device that creates a SerialPort instance.
   * @param {USBDevice} device A device acquired from the WebUSB API
   * @param {SerialPolyfillOptions} polyfillOptions Optional options to
   * configure the polyfill.
   */
  constructor(
    device,
    polyfillOptions) {
    this.#polyfillOptions = { ...kDefaultPolyfillOptions, ...polyfillOptions };
    this.#outputSignals = {
      dataTerminalReady: false,
      requestToSend: false,
      break: false,
    };

    this.#device = device;
    this.#controlInterface = findInterface(
      this.#device,
      this.#polyfillOptions.usbControlInterfaceClass);
    this.#transferInterface = findInterface(
      this.#device,
      this.#polyfillOptions.usbTransferInterfaceClass);
    this.#inEndpoint = findEndpoint(this.#transferInterface, 'in');
    this.#outEndpoint = findEndpoint(this.#transferInterface, 'out');
  }

  /**
   * Getter for the readable attribute. Constructs a new ReadableStream as
   * necessary.
   * @returns {ReadableStream|null} the current readable stream
   */
  get readable() {
    if (!this.#readable && this.#device.opened) {
      this.#readable = new ReadableStream < Uint8Array > (
        new UsbEndpointUnderlyingSource(
          this.#device, this.#inEndpoint, () => {
            this.#readable = null;
          }),
        {
          highWaterMark: this.#serialOptions.bufferSize ?? kDefaultBufferSize,
        });
    }
    return this.#readable;
  }

  /**
   * Getter for the writable attribute. Constructs a new WritableStream as
   * necessary.
   * @returns {WritableStream<Uint8Array> | null} the current writable stream
   */
  get writable() {
    if (!this.#writable && this.#device.opened) {
      this.#writable = new WritableStream(
        new UsbEndpointUnderlyingSink(
          this.#device, this.#outEndpoint, () => {
            this.#writable = null;
          }),
        new ByteLengthQueuingStrategy({
          highWaterMark: this.#serialOptions.bufferSize ?? kDefaultBufferSize,
        }));
    }
    return this.#writable;
  }

  /**
   * a function that opens the device and claims all interfaces needed to
   * control and communicate to and from the serial device
   * @param {SerialOptions} options Object containing serial options
   * @returns {Promise<void>} A promise that will resolve when device is ready
   * for communication
   */
  async open(options) {
    this.#serialOptions = options;
    this.#validateOptions();

    try {
      await this.#device.open();
      if (this.#device.configuration === null) {
        await this.#device.selectConfiguration(1);
      }

      await this.#device.claimInterface(this.#controlInterface.interfaceNumber);
      if (this.#controlInterface !== this.#transferInterface) {
        await this.#device.claimInterface(
          this.#transferInterface.interfaceNumber);
      }

      await this.#setLineCoding();
      await this.setSignals({ dataTerminalReady: true });
    } catch (error) {
      if (this.#device.opened) {
        await this.#device.close();
      }
      throw new Error('Error setting up device: ' + error.toString());
    }
  }

  /**
   * Closes the port.
   *
   * @returns {Promise<void>} A promise that will resolve when the port is
   * closed.
   */
  async close() {
    const promises = [];
    if (this.#readable) {
      promises.push(this.#readable.cancel());
    }
    if (this.#writable) {
      promises.push(this.#writable.abort());
    }
    await Promise.all(promises);
    this.#readable = null;
    this.#writable = null;
    if (this.#device.opened) {
      await this.setSignals({ dataTerminalReady: false, requestToSend: false });
      await this.#device.close();
    }
  }

  /**
   * Forgets the port.
   *
   * @returns {Promise<void>} A promise that will resolve when the port is
   * forgotten.
   */
  async forget() {
    return this.#device.forget();
  }

  /**
   * A function that returns properties of the device.
   * @returns {SerialPortInfo} Device properties.
   */
  getInfo() {
    return {
      usbVendorId: this.#device.vendorId,
      usbProductId: this.#device.productId,
    };
  }

  /**
   * A function used to change the serial settings of the device
   * @param {SerialOptions} options the object which carries serial settings data
   * @returns {Promise<void>} A promise that will resolve when the options are
   * set
   */
  reconfigure(options) {
    this.#serialOptions = { ...this.#serialOptions, ...options };
    this.#validateOptions();
    return this.#setLineCoding();
  }

  /**
   * Sets control signal state for the port.
   * @param {Partial<SerialOutputSignals>} signals The signals to enable or disable.
   * @returns {Promise<void>} a promise that is resolved when the signal state
   * has been changed.
   */
  async setSignals(signals) {
    this.#outputSignals = { ...this.#outputSignals, ...signals };

    if (signals.dataTerminalReady !== undefined ||
      signals.requestToSend !== undefined) {
      // The Set_Control_Line_State command expects a bitmap containing the
      // values of all output signals that should be enabled or disabled.
      //
      // Ref: USB CDC specification version 1.1 §6.2.14.
      const value = (this.#outputSignals.dataTerminalReady ? 1 << 0 : 0) |
        (this.#outputSignals.requestToSend ? 1 << 1 : 0);

      await this.#device.controlTransferOut({
        'requestType': 'class',
        'recipient': 'interface',
        'request': kSetControlLineState,
        'value': value,
        'index': this.#controlInterface.interfaceNumber,
      });
    }

    if (signals.break !== undefined) {
      // The SendBreak command expects to be given a duration for how long the
      // break signal should be asserted. Passing 0xFFFF enables the signal
      // until 0x0000 is send.
      //
      // Ref: USB CDC specification version 1.1 §6.2.15.
      const value = this.#outputSignals.break ? 0xFFFF : 0x0000;

      await this.#device.controlTransferOut({
        'requestType': 'class',
        'recipient': 'interface',
        'request': kSendBreak,
        'value': value,
        'index': this.#controlInterface.interfaceNumber,
      });
    }
  }

  /**
   * Checks the serial options for validity and throws an error if it is
   * not valid
   * @returns {void}
   */
  #validateOptions() {
    if (!this.#isValidBaudRate(this.#serialOptions.baudRate)) {
      throw new RangeError('invalid Baud Rate ' + this.#serialOptions.baudRate);
    }

    if (!this.#isValidDataBits(this.#serialOptions.dataBits)) {
      throw new RangeError('invalid dataBits ' + this.#serialOptions.dataBits);
    }

    if (!this.#isValidStopBits(this.#serialOptions.stopBits)) {
      throw new RangeError('invalid stopBits ' + this.#serialOptions.stopBits);
    }

    if (!this.#isValidParity(this.#serialOptions.parity)) {
      throw new RangeError('invalid parity ' + this.#serialOptions.parity);
    }
  }

  /**
   * Checks the baud rate for validity
   * @param {number} baudRate the baud rate to check
   * @returns {boolean} A boolean that reflects whether the baud rate is valid
   */
  #isValidBaudRate(baudRate) {
    return baudRate % 1 === 0;
  }

  /**
   * Checks the data bits for validity
   * @param {number|undefined} dataBits the data bits to check
   * @returns {boolean} A boolean that reflects whether the data bits setting is
   * valid
   */
  #isValidDataBits(dataBits) {
    if (typeof dataBits === 'undefined') {
      return true;
    }
    return kAcceptableDataBits.includes(dataBits);
  }

  /**
   * Checks the stop bits for validity
   * @param {number|undefined} stopBits the stop bits to check
   * @returns {boolean} A boolean that reflects whether the stop bits setting is
   * valid
   */
  #isValidStopBits(stopBits) {
    if (typeof stopBits === 'undefined') {
      return true;
    }
    return kAcceptableStopBits.includes(stopBits);
  }

  /**
   * Checks the parity for validity
   * @param {ParityType | undefined} parity the parity to check
   * @returns {boolean} A boolean that reflects whether the parity is valid
   */
  #isValidParity(parity) {
    if (typeof parity === 'undefined') {
      return true;
    }
    return kAcceptableParity.includes(parity);
  }

  /**
   * sends the options alog the control interface to set them on the device
   * @returns {Promise<void>} a promise that will resolve when the options are set
   */
  async #setLineCoding() {
    // Ref: USB CDC specification version 1.1 §6.2.12.
    const buffer = new ArrayBuffer(7);
    const view = new DataView(buffer);
    view.setUint32(0, this.#serialOptions.baudRate, true);
    view.setUint8(
      4, kStopBitsIndexMapping.indexOf(
        this.#serialOptions.stopBits ?? kDefaultStopBits));
    view.setUint8(
      5, kParityIndexMapping.indexOf(
        this.#serialOptions.parity ?? kDefaultParity));
    view.setUint8(6, this.#serialOptions.dataBits ?? kDefaultDataBits);

    const result = await this.#device.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': kSetLineCoding,
      'value': 0x00,
      'index': this.#controlInterface.interfaceNumber,
    }, buffer);
    if (result.status != 'ok') {
      throw new DOMException('NetworkError', 'Failed to set line coding.');
    }
  }
}

/** implementation of the global navigator.serial object */
class Serial {
  /**
   * Requests permission to access a new port.
   *
   * @param {SerialPortRequestOptions} [options]
   * @param {SerialPolyfillOptions} [polyfillOptions]
   * @returns {Promise<SerialPort>}
   */
  async requestPort(
    options,
    polyfillOptions) {
    polyfillOptions = { ...kDefaultPolyfillOptions, ...polyfillOptions };

    /** @type {USBDeviceFilter[]} */
    const usbFilters = [];
    if (options && options.filters) {
      for (const filter of options.filters) {
        /** @type {USBDeviceFilter} */
        const usbFilter = {
          classCode: polyfillOptions.usbControlInterfaceClass,
        };
        if (filter.usbVendorId !== undefined) {
          usbFilter.vendorId = filter.usbVendorId;
        }
        if (filter.usbProductId !== undefined) {
          usbFilter.productId = filter.usbProductId;
        }
        usbFilters.push(usbFilter);
      }
    }

    if (usbFilters.length === 0) {
      usbFilters.push({
        classCode: polyfillOptions.usbControlInterfaceClass,
      });
    }

    const device = await navigator.usb.requestDevice({ 'filters': usbFilters });
    const port = new SerialPort(device, /** @type {SerialPolyfillOptions} */(polyfillOptions));
    return port;
  }

  /**
   * Get the set of currently available ports.
   *
   * @param {SerialPolyfillOptions} [polyfillOptions] Polyfill configuration that
   * should be applied to these ports.
   * @returns {Promise<SerialPort[]>} a promise that is resolved with a list of
   * ports.
   */
  async getPorts(polyfillOptions) {
    polyfillOptions = { ...kDefaultPolyfillOptions, ...polyfillOptions };

    const devices = await navigator.usb.getDevices();
    /** @type {SerialPort[]} */
    const ports = [];
    devices.forEach((device) => {
      try {
        const port = new SerialPort(device, /** @type {SerialPolyfillOptions} */(polyfillOptions));
        ports.push(port);
      } catch (e) {
        // Skip unrecognized port.
      }
    });
    return ports;
  }
  /**
 * Attach an event listener.
 *
 * @param {'connect' | 'disconnect'} event the event to listen for.
 * @param {(EventListener | EventListenerObject | null) => void} handleEvent the function to be triggered on the event.
 */
  addEventListener(event,
    handleEvent) {
    navigator.usb.addEventListener(event, handleEvent);
  }

  /**
   * Remove an event listener.
   *
   * @param {'connect' | 'disconnect'} event the event for which the listener should be removed.
   * @param {(EventListener | EventListenerObject | null)=>void} handleEvent the handler to be removed.
   */
  removeEventListener(event,
    handleEvent) {
    navigator.usb.removeEventListener(event, handleEvent);
  }
}

if (
  typeof navigator !== 'undefined' &&
  navigator.usb !== undefined &&
  navigator.serial === undefined
) {
  /* an object to be used for starting the serial workflow */
  navigator.serial = new Serial();
}
