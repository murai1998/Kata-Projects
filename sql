CREATE TABLE student (id NUMBER PRIMARY KEY, name VARCHAR(20), age NUMBER);

CREATE TABLE subject(id NUMBER PRIMARY KEY, name VARCHAR(20));

DROP TABLE mark;


CREATE TABLE mark(id NUMBER PRIMARY KEY, student_id NUMBER, subject_id NUMBER, value NUMBER);

INSERT INTO student VALUES(1, 'Anton', 21);
INSERT INTO student VALUES(2, 'Anna', 22);

INSERT INTO subject VALUES(1, 'math');
INSERT INTO subject VALUES(2, 'english');

INSERT INTO mark VALUES(1, 1, 1, 5);
INSERT INTO mark VALUES(2, 1, 1, 5);
INSERT INTO mark VALUES(3, 1, 1, 4);
INSERT INTO mark VALUES(4, 1, 2, 4);
INSERT INTO mark VALUES(5, 1, 2, 5);

INSERT INTO mark VALUES(6, 2, 1, 4);
INSERT INTO mark VALUES(8, 2, 1, 4);
INSERT INTO mark VALUES(9, 2, 1, 5);
INSERT INTO mark VALUES(40, 2, 2, 5);
INSERT INTO mark VALUES(50, 2, 2, 4);



SELECT * FROM student WHERE age > 21;

SELECT s.name, m.value as mark FROM student s JOIN mark m ON (s.id = m.student_id);

SELECT s.name, s2.name, m.value as mark FROM student s JOIN mark m ON (s.id = m.student_id) JOIN subject s2 ON(s2.id = m.subject_id) WHERE m.value > 4 AND s2.name = 'math';
