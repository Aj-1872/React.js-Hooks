import React,{useState,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function _5UseCallBack() {

  const [age , setage] = useState(19);
  const [salary, setsalary] = useState(90000)

  const increment = useCallback(()=>{
    setage(age + 1);
  },[age])
  const incrementSalary = useCallback(()=>{
    setsalary(salary + 1000);
  },[salary])
  return (
    <div>
    <Title/>
    <Count text="Age" Count={age}/>
    <Button handleClick={increment} >age</Button>
    <Count text = "Salary" Count = {salary}/>
    <Button handleClick={incrementSalary}>Salary</Button>
    </div>
  )
}

export default _5UseCallBack