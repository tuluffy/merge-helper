A library for react component.

Note: 所有的组件符合es module规范，具体用法可以直接看源码.

Installation

    $ yarn add @tuluffy/merge-helper -D
    
or  

     $ npm i @tuluffy/merge-helper --save



Use

    import { mergeState_base, 
             mergeState_increase,
             mergeState_negation} from 'yotsuha';
    
    this.setState(mergeState_base('username', 'tuluffy'))
    
    this.setState(mergeState_increase('count')) // +1
    
    this.setState(mergeState_increase('count', 2))  // +2
    
    this.setState(mergeState_negation('showLoading'))   // !prevStatus
    
    this.setState(mergeState_negation('showLoading', false))


