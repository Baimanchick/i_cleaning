'use client'

import React from 'react';
import { Flex, Form, Input } from 'antd';
import styles from "./FormEmail.module.scss";
import FormSectionTitle from '../FormSectionTitle/FormSectionTitle';
import { Button } from '../Button/Button';
import email from '@/assets/svgs/form/email.svg';
import $axios from '@/utils/axios';
import { FormState } from '@/helpers/interfaces/form.interface';
import { API_URL } from '@/utils/const';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
};

function FormEmail() {
    const [form] = Form.useForm();

    const onFinish = (values: FormState) => {
        const postData = {
            name: values.name,
            phone: values.phone,
            email: values.email,
            subject: values.subject,
            message: values.message,
        };

        $axios.post(`${API_URL}/form/`, postData)
            .then(response => {
                console.log('Success:', response);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Flex className={styles.MainFlex} gap={63} align={'center'}>
            <Form
                requiredMark={false}
                {...formItemLayout}
                layout='vertical'
                variant="filled"
                className={styles.form}
                validateMessages={validateMessages}
                onFinish={onFinish}
            >
                <Form.Item className={styles.formItem} label="Name" name="name" >
                    <Input className={styles.input} placeholder='Name' />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    className={styles.formItem}
                >
                    <Input className={styles.input} placeholder='Phone' />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: 'email' }]}
                    className={styles.formItem}
                >
                    <Input className={styles.input} placeholder='Email' />
                </Form.Item>

                <Form.Item className={styles.formItem} label="Subject" name="subject" >
                    <Input className={styles.input} placeholder='Subject' />
                </Form.Item>

                <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'Please type message!' }]}
                    className={styles.formItem}
                >
                    <Input.TextArea className={`${styles.textArea}`} placeholder='Message' />
                </Form.Item>

                <Form.Item className={styles.FormSubmit} wrapperCol={{ offset: 6, span: 16 }}>
                    <Button
                        icon={<img className={styles.icon} src={email.src} alt='email icon' />}
                        className={styles.btn}
                        appearance='blue'
                        htmlType='submit'
                        disabled={
                            !form.isFieldTouched
                        }
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <FormSectionTitle />
        </Flex>
    );
}

export default FormEmail;
