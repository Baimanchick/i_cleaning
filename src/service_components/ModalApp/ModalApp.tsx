'use client'

import React, { useState } from 'react'
import email from '@/assets/svgs/form/email.svg';
import { Modal, Form, Input, message, Flex } from 'antd'
import $axios from '@/utils/axios';
import styles from "./ModalApp.module.scss"
import { API_URL } from '@/utils/const';
import { Button } from '@/components/Button/Button';
import { ModalAppProps } from './ModalApp.props';

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


function ModalApp({ isModalVisible, handleCancel }: ModalAppProps) {
    const [form] = Form.useForm();
    const [submitted, setSubmitted] = useState(false);

    const onFinish = (values: any) => {
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
                form.resetFields();
                setSubmitted(true);
                message.success('Mail sent successfully. Thank you for your email.');
            })
            .catch(error => {
                console.error('Error:', error);
                message.error('Something went wrong. Please try again');
            });
        handleCancel()
    };
    return (
        <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            centered
            className={styles.modal}
        >
            <Flex className={styles.MainFlex} gap={63} align={'center'} justify={'center'}>
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
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Modal>
    )
}

export default ModalApp