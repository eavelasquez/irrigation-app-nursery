import {Configuration} from '../interfaces/configuration';

export const humedad: Configuration = {
  title: 'Humedad',
  icon: 'tank',
  inputs: [
    {
      name: 'humedad',
      type: 'text',
      pattern: '^[0-9]*$'
    }
  ],
  url: '/humedad'
};

// export const bomba: Configuration = {
//   title: 'Bomba de Agua',
//   icon: 'bomb',
//   inputs: [
//     {
//       name: 'serial',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     }, {
//       name: 'voltaje',
//       type: 'number',
//       pattern: '^[0-9]*$'
//     },
//   ],
//   select: [
//     {
//       name: 'tanque',
//     }
//   ],
//   url: '/bomba'
// };

// export const tanque: Configuration = {
//   title: 'Tanque de Agua',
//   icon: 'tank',
//   inputs: [
//     {
//       name: 'serial',
//       type: 'text',
//       pattern: '^[a-zA-Z]+$'
//     },
//     {
//       name: 'altura',
//       type: 'number',
//       pattern: '^[0-9]*$'
//     },
//     {
//       name: 'capacidad',
//       type: 'number',
//       pattern: '^[0-9]*$'
//     },
//     {
//       name: 'volumen',
//       type: 'number',
//       pattern: '^[0-9]*$'
//     }
//   ],
//   url: '/tanque'
// };

// export const sensor: Configuration = {
//   title: 'Sensor de humedad',
//   icon: '',
//   inputs: [
//     {
//       name: 'serial',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     }
//   ],
//   select: [
//     {
//       name: 'planta',
//     }
//   ],
//   url: '/sensor'
// };

// export const planta: Configuration = {
//   title: 'información de la planta',
//   icon: 'leaf',
//   inputs: [
//     {
//       name: 'id',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     },
//     {
//       name: 'nombre',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     }
//   ],
//   url: '/planta'
// };

// export const electrovalvula: Configuration = {
//   title: 'Electroválvula',
//   icon: '',
//   inputs: [
//     {
//       name: 'serial',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     },
//     {
//       name: 'voltaje',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     }
//   ],
//   url: '/electrovalvula'
// };

// export const bateria: Configuration = {
//   title: 'Batería',
//   icon: '',
//   inputs: [
//     {
//       name: 'serial',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     },
//     {
//       name: 'capacidad',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     },
//     {
//       name: 'voltaje',
//       type: 'text',
//       pattern: '^[0-9]*$'
//     }
//   ],
//   url: '/bateria'
// };

