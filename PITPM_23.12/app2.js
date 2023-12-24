//�������� ������ "����������" � ������ "�����" � "��� �������".
let avto = { marka: 'Mercedes-Benz', year: 2020 };

//�������� ����� ������� � �������� ������� � ���������, ��� ��� �������.
//������ ������ ���������
let transport = [{ marka: 'hyundai', year: 2014 }, { marka: 'toyota', year: 2012 }];
//� ������� reverse ������� ������� ������ �������� ������� ��������� � �������� �������, 
//����� � ������� ������ "splice" �������� ����� � �������� ������� ����� ���������� �������
function reverse(array, item) {
    let index = Math.ceil(array.length / 2);
    array.splice(index, 0, item);
    return array;
}

reverse(transport, avto)
console.log(transport)



//�������� �������, ������������ Promise, ������� ����������� ����� 1 �������.
function primer(x, y) {
    return new Promise((resolve, reject) => {
        if (y, x === 0) {
            reject("�� �������� ������, ��� ���������� ����� 0");
        }
        else {
            const z = x / y;
            setTimeout(() => console.log("�����", z), 1000);

        }
        
    });
}
primer(15, 10);


//��������� async/await, �������� ���, ������� �������� ��� ������� � ������� ��������� � �������.
async function cPrimer(x, y) {
    try {
        const result = await primer(x, y);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

cPrimer(15, 10);



