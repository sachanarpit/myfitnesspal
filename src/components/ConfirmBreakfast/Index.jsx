import React from 'react'
import style from '../ConfirmBreakfast/Index.css'
import {Heading6} from '../GlobalComp/Heading.Pages.Signup'
import {ConfirmBreakfastData} from './db'
export const Index = () => {
    console.log(ConfirmBreakfastData);
    const arr = ConfirmBreakfastData.dropdown;
    console.log(arr);
    return (
        <div className='select-item'>
            <div>
                <Heading6>Homemade - Poha</Heading6>
            </div>
            <div className='select-serving'>
                <div>
                    <input type="text" placeholder='00'/>
                    </div>
                
                <div>
                    <p>serving of</p>
                </div>
                <div>
                <select>
                    {arr.map((e)=>{
                       return <option>{e} gm</option>
                    })}
                </select>
                </div>
            </div>

            <div className='select-button-for-food'>
                <div>
                    <button>Add Food To Dairy</button>
                </div>
                <div>
                <button>Nutrition Info</button>
                </div>
            </div>
        </div>
    )
}
