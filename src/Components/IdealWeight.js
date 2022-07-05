import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const IdealWeight = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [iw, setIW] = useState(0);
  const onSubmit = data => {
    console.log(data);
    const { age, heightInFeet, heightInInch, gender } = data;
    const height = +heightInFeet * 12 + +heightInInch;
    if (gender === 'male') height > 60 ? setIW(50 + (height - 60) * 2.3) : setIW(50)
    else height > 60 ? setIW(45.5 + (height - 60) * 2.3) : setIW(45.5)
  }
  return (
    <div className='w-full '>
      <h1 className='text-3xl md:text-4xl font-bold mb-0 text-center mt-10'>Calculate Ideal Weight</h1>
      <div className='p-6 w-full md:w-2/3 mx-auto flex flex-col md:flex-row'>
        <form onSubmit={handleSubmit(onSubmit)} className='text-white w-full md:w-1/2 bg-gray-100 shadow-lg p-6 rounded-lg border-2 border-gray-200 text-base'>
          {/* age */}
          <div className="form-control w-full">
            <label className="label text-sm font-semibold py-0">
              <span className="label-text text-lg ml-3">Age</span>
            </label>
            <input type="text" name='age' className='input w-full mt-2 text-gray-600 text-base' {...register("age",
              {
                required: { value: true, message: 'Age is required' },
                pattern: { value: /[0-9]/, message: 'Provide a valid number' }
              })} />
            <label className="label pt-1 ml-2">
              <span className="label-text-alt"></span>
              {(errors?.age?.type === 'required' || errors?.age?.type === 'pattern') && <span className="label-text-alt text-[12px] text-red-500">{errors?.age?.message}</span>}
            </label>
          </div>

          {/* height */}
          <div className="form-control w-full">
            <label className="label text-sm font-semibold py-0">
              <span className="label-text ml-3 text-base">Height</span>
            </label>
            <div className='w-full flex flex-row'>
              <div className='w-full mt-2 bg-gray-200 text-gray-600 rounded-full flex flex-row items-center'>
                <input type="text" name='heightInFeet' className='input w-full rounded-l-full text-base' {...register("heightInFeet",
                  {
                    required: { value: true, message: 'Height is required' }, pattern: { value: /[0-9]/, message: 'Provide a valid number' }
                  })} />
                <span className='px-6 text-gray-800'>Feet</span>
              </div>
              <div className='w-6'></div>
              <div className='w-full mt-2 bg-gray-200 text-gray-600 rounded-full flex flex-row items-center'>
                <input type="text" name='heightInch' className='input w-full rounded-l-full text-base' {...register("heightInInch",
                  {
                    required: { value: true, message: 'Height is required' }, pattern: { value: /[0-9]/, message: 'Provide a valid number' }
                  })} />
                <span className='px-6 text-gray-800'>Inch</span>
              </div>
            </div>
            <label className="label pt-1 ml-2">
              <span className="label-text-alt"></span>
              {(errors?.heightInFeet?.type === 'required' || errors?.heightInInch?.type === 'required' || errors?.heightInFeet?.type === 'pattern' || errors?.heightInInch?.type === 'pattern') && <span className="label-text-alt text-[12px] text-red-500">{errors?.heightInFeet?.message || errors?.heightInInch?.message}</span>}
            </label>
          </div>

          {/* gender */}
          <label className="label text-sm font-semibold py-0">
            <span className="label-text text-lg ml-3">Gender</span>
          </label>
          <div className='flex px-4'>
            <div className="form-check w-1/2">
              <label htmlFor="Male" className='label-text text-base'>
                <input
                  {...register('gender', { required: { value: true, message: 'Gender is required' } })}
                  type="radio"
                  name="gender"
                  value="male"
                />{' '}
                Male
              </label>
            </div>

            <div className="form-check w-1/2">
              <label htmlFor="Female" className='label-text text-base'>
                <input
                  {...register('gender', { required: { value: true, message: 'Gender is required' } })}
                  type="radio"
                  name="gender"
                  value="female"
                />{' '}
                Female
              </label>
            </div>

          </div>
          <label className="label pt-1 ml-2">
            <span className="label-text-alt"></span>
            {(errors?.gender?.type === 'required') && <span className="label-text-alt text-[12px] text-red-500">{errors?.gender?.message}</span>}
          </label>
          {/* submit button */}
          <input type="submit" value='Calculate' className="btn btn-secondary  hover:bg-black hover:text-gray-100 modal-action w-full  my-2" />
        </form>
        <div className='w-full md:w-1/2 pl-0 md:pl-6 mt-8 md:mt-0'>
          <div id='result' className='h-full w-full rounded-lg border-2 border-gray-200 bg-gray-100 shadow-lg'>
            <h1 className='text-center text-2xl font-bold my-4'>Result</h1>
            <hr className='h-1 bg-gray-600 mx-8 rounded-full opacity-20' />
            <div className='w-full h-full p-8'>
              <h1 className='font-semibold text-lg mb-2'>According to B. J. Devine Formula</h1>
              <h1 className='font-semibold text-lg mb-2'>Your Ideal Weight: <span className='font-bold '>{iw.toFixed(1)}</span> kg</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealWeight;