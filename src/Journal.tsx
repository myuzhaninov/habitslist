import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from 'react-calendar';
import styles from './Journal.module.scss';



export function Journal() {
    let [habit, setHabit] = useState<{ label: string, selected: boolean, icon: string }[]>([
        {
            label: 'Фрукты',
            selected: false,
            icon: '1.svg',
        },
        {
            label: 'Ягоды',
            selected: false,
            icon: '2.svg',
        },
        {
            label: 'Бобовые',
            selected: false,
            icon: '3.png',
        },
        {
            label: 'Овощи',
            selected: false,
            icon: '4.svg',
        },
        {
            label: 'Орехи',
            selected: false,
            icon: '5.png',
        },
        {
            label: 'Зерновые',
            selected: false,
            icon: '6.png',
        },
        {
            label: 'Зелень',
            selected: false,
            icon: '7.png',
        },
        {
            label: 'Семена',
            selected: false,
            icon: '8.png',
        },
    ])



    let isCalendarGreen = habit.reduce((acc, cur) => {
        if (cur.selected) {
            acc++
        }
        return acc
    }, 0)



    return (
        <Container fluid>
            <Row className="mt-5 justify-content-xl-center">
                <Col md={12} xl={8} className="ml-1">
                    <div className={styles.habitList}>
                        {
                            habit.map((el, idx) => {
                                return (
                                    <div className={styles.habitItem}
                                        key={el.label + idx}
                                        onClick={() => {
                                            habit[idx].selected = !habit[idx].selected
                                            setHabit([...habit])
                                        }}>
                                        <div className={styles.habitIcon}>
                                            <img src={'./images/types/' + el.icon} alt='' width={70} />
                                            {
                                                el.selected && <img src={'./images/check.svg'} alt='' className={styles.check} />
                                            }
                                        </div>
                                        <h5>{el.label}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Col>
                <Col md={12} xl={3} className={(isCalendarGreen >= 5 ? styles.green : '')}>
                    <Calendar />
                </Col>
            </Row>
        </Container>
    )
}