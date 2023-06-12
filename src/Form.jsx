/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()
  const [success,setSuccess] = useState(false);
  //use form gives methods
  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  }) //accessing handlesubmit from methods and writing custom method to handle it

  // const name_validation = {
  //   name: 'name',
  //   label: 'name',
  //   type: 'text',
  //   id: 'name',
  //   placeholder: 'write your name ...',
  //   validation: {
  //     required: {
  //       value: true,
  //       message: 'required',
  //     },
  //     maxLength: {
  //       value: 30,
  //       message: '30 characters max',
  //     },
  //   },
  // }
  // const password_validation = {
  //   label: 'password',
  //   name: 'password',
  //   type: 'password',
  //   id: 'password',
  //   placeholder: 'type your password..',
  //   validation: {
  //     required: {
  //       value: true,
  //       message: 'required',
  //     },
  //     minLength: {
  //       value: 6,
  //       message: 'min 6 characters',
  //     },
  //   },
  // }

  return (
    <FormProvider {...methods}>
      {/* passed all methods to formprovider as props*/}
      <form onSubmit={e => e.preventDefault()} noValidate className="container">
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation}/>
          <Input {...password_validation} />
          <Input {...email_validation} />
          <Input {...num_validation} />
          <Input {...desc_validation} className="md:col-span-2"/>
        </div>
        <div className="mt-5">
          {success &&(
            <p className='flex items-center gap-1 mb-5 font-semibold text-green-500'>
              <BsFillCheckSquareFill/> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semi text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
