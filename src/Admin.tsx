import React, { useRef, useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";



export function Admin() {

    let [habit, setHabit] = useState<string[]>([
        'Фрукты',
        'Ягоды',
        'Бобовые',
        'Овощи',
        'Орехи',
        'Зерновые',
        'Зелень',
        'Семена',
    ])

    let inputEl = useRef<HTMLInputElement>(null)

    let addHabitToState = () => {
        if (inputEl.current) {
            setHabit([...habit, inputEl.current?.value])
            inputEl.current.value = ''
        }
    }

    return (
        <Container fluid>
            <Row className="mt-5">
                <Col className="ml-1">
                    {
                        habit.map((el, idx) => {
                            return (
                                <div key={el + idx}>
                                    <h5>{el}</h5>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="ml-1">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Введите привычку"
                            aria-label="Введите привычку"
                            aria-describedby="basic-addon2"
                            ref={inputEl}
                        />
                        <InputGroup.Append>
                            <Button onClick={addHabitToState} variant="outline-secondary">Добавить</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}