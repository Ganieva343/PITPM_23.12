//�������� ����������, ���������� ���� ���, � �������� �� � �������.
var mynane;
mynane = "FARAKHNOS";
console.log(mynane);

//�������� ������ ����� � �������� ���� ��� ������ ������� ��������.
const mass_namber = [1, 10, 3, 2, 17, 20, 19];
for (const number of mass_namber) {

    console.log(number);
}


//�������� �������, ������� ��������� ��� ����� � ���������� �� �����.

function sum(a, b) {
    const result = a + b;
    console.log(result);
}
sum(5, 7);

//�������� �������-����������� ��� ������� "�������" � ������ "���" � "�������".
function Student(Name, Age) {
    this.name = Name;
    this.age = Age;

    console.log("���: ", this.name);
    console.log("�������: ", this.age);

}
Student("FARAKHNOS", 19);


