import eye from '../assets/eye.png'
import selector from '../assets/selector.png'
import activeEye from '../assets/activeEye.png'
import activeSelector from '../assets/activeSelector.png'

export const elements = [
    {
        id: 1,
        cls1: 'display',
        cls2: 'display__content',
        cls3: 'display__value',
        draggable: true,
        content: []  
    },
    {
      id: 2,
      cls1: 'operations',
      cls2: 'button__small',
      cls3: 'button__content',
      draggable: true,
      content: [
        {id: 1, text: '/'},
        {id: 2, text: '*'},
        {id: 3, text: '-'},
        {id: 4, text: '+'}
      ]
    },
    { 
      id: 3,
      cls1: 'digits',
      cls2: 'button__normal',
      cls3: 'button__content',
      draggable: true,
      content: [
        {id: 5, text: '7'},
        {id: 6, text: '8'},
        {id: 7, text: '9'},
        {id: 8, text: '4'},
        {id: 9, text: '5'},
        {id: 10, text: '6'},
        {id: 11, text: '1'},
        {id: 12, text: '2'},
        {id: 13, text: '3'},
        {id: 14, text: '0'},
        {id: 15, text: ','},
      ]
    },
    {
      id: 4,
      cls1: 'equal',
      cls2: 'button__big',
      cls3: 'equal__content',
      draggable: true,
      content: [
        {id: 16, text: '='},
      ]
    }
]

export const boards = [
    {
      position: 'left',
      components: [...elements]
    },
    {
      position: 'right',
      components: []
    }
]

export const swButtons = [
  { title: 'Runtime',  icon: eye, active: false, activeIcon: activeEye},
  { title: 'Constructor', icon: selector, active: true, activeIcon: activeSelector }
]