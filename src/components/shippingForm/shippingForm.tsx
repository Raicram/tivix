'use client';

import { useForm } from "react-hook-form";
import { Button } from "../button/button";
import styles from './shippingForm.module.scss';
import { ScriptProps } from "next/dist/client/script";
import { Rebrickable } from "@/types/types";
import { sendFormData } from "@/services/apiService";
import { useRouter } from 'next/navigation'

export const ShippingForm = ({children}: ScriptProps) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Rebrickable.ShippingFormData>();
    const requireMsg: string = 'This is required...';    

    const onSubmit = async (data: Rebrickable.ShippingFormData) => {
        const res = await sendFormData(data);
        if(res.message === 'success') {
            router.push('/')
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formWrapper}>
                <div>
                    <h1>SHIPPING DETAILS</h1>
                    <div className={styles.inputWrapper}>
                        <div className={styles.input}>
                            <p>Name</p>
                            <input {...register("name" , {required: requireMsg})} />
                            <span className={styles.error}>{errors.name?.message?.toString()}</span>
                        </div>
                        <div className={styles.input}>
                            <p>Surname</p>
                            <input {...register("surname" , {required: requireMsg})} />
                            <span className={styles.error}>{errors.surname?.message?.toString()}</span>
                        </div>
                        <div className={styles.inputWide}>
                            <p>Phone number</p>
                            <input {...register("phone" , {
                                required: requireMsg,
                                pattern:{
                                   value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                   message: 'Invalid phone number'
                                },
                            })} />
                            <span className={styles.error}>{errors.phone?.message?.toString()}</span>
                        </div>
                        <div className={styles.inputWide}>
                            <p>Email</p>
                            <input {...register("email" , {
                                required: requireMsg,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                  }
                            })} />
                            <span className={styles.error}>{errors.email?.message?.toString()}</span>
                        </div>
                        <div className={styles.inputWide}>
                            <p>Date of Birth</p>
                            <input {...register("date" , {required: requireMsg})} type="date" />
                            <span className={styles.error}>{errors.date?.message?.toString()}</span>
                        </div>
                        <div className={styles.inputWide}>
                            <p>Address</p>
                            <input {...register("address" , {required: requireMsg})} type="text" />
                            <span className={styles.error}>{errors.address?.message?.toString()}</span>
                        </div>
                        <div className={styles.inputWide}>
                            <p>City</p>
                            <input {...register("city" , {required: requireMsg})} type="text" />
                            <span className={styles.error}>{errors.city?.message?.toString()}</span>
                        </div>
                        <div className={styles.input}>
                            <p>State</p>
                            <input {...register("state" , {required: requireMsg})} type="text" />
                            <span className={styles.error}>{errors.state?.message?.toString()}</span>
                        </div>
                        <div className={styles.input}>
                            <p>Zip Code</p>
                            <input {...register("zipcode" , {
                                required: requireMsg,
                                pattern:{
                                   value: /^\d+(\-\d+)*$/,
                                   message: 'Invalid zip code'
                                },    
                            })} type="text" />
                            <span className={styles.error}>{errors.zipcode?.message?.toString()}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.summaryWrapper}>
                    <div className="summaryBodyWrapper">
                        {children}
                    </div>
                    <Button type='submit'>
                        SUBMIT
                    </Button>
                </div>
            </div>
        </form>
    )
}