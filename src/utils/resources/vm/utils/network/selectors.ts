import { V1Interface } from '@kubevirt-ui/kubevirt-api/kubevirt';

import { NO_DATA_DASH, UDN_BINDING_NAME } from '../constants';

import { interfacesTypes } from './constants';

/**
 * function to get network interface type
 * @param {V1Interface} iface interface
 * @returns interface type
 */
export const getNetworkInterfaceType = (iface: V1Interface): string => {
  if (iface?.binding?.name === UDN_BINDING_NAME) return UDN_BINDING_NAME;

  const drive = Object.keys(interfacesTypes)?.find((ifaceType: string) => iface?.[ifaceType]);
  return drive ?? NO_DATA_DASH;
};

/**
 * function to get printable network interface type
 * @param {V1Interface} iface interface
 * @returns interface type
 */
export const getPrintableNetworkInterfaceType = (iface: V1Interface): string =>
  interfacesTypes[getNetworkInterfaceType(iface)];
