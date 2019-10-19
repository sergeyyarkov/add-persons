// Person => instances

document.addEventListener('DOMContentLoaded', () => {
    const $form = document.querySelector('form');
    const $modal = document.querySelector('.modal-mask');
    const $btnShow = document.querySelector('.btn-show');
    const $btnClose = document.querySelector('.btn-close');
    const persons = [];

    class Person {
        constructor(firstName, surName, age, job) {
            this.firstName = firstName;
            this.surName = surName;
            this.age = age;
            this.job = job;
        }

        addPerson() {
            persons.push(this);
        }
    }

    const showAlert = function() {
        const $alert = document.querySelector('.alert-wrap');
        $alert.innerHTML += '<p class="alert alert-success">Person has been successfully added!</p>';
        setTimeout(() => {
            $alert.querySelector('p').remove();
        }, 2000);
    }

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const _this = e.target,
            firstName = _this.name.value,
            surName = _this.surname.value,
            age = _this.age.value,
            job = _this.job.value;

        new Person(firstName, surName, age, job).addPerson();
        showAlert();
    });

    const showPersons = function () {
        $modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        const list = $modal.querySelector('tbody');

        if (persons.length) {
            list.innerHTML = '';
            for (let item of persons) {
                list.innerHTML += `
                <tr>
                    <td>
                        <p>${item.firstName}</p>
                    </td>
                    <td>
                        <p>${item.surName}</p>
                    </td>
                    <td>
                        <p>${item.age}</p>
                    </td>
                    <td>
                        <p>${item.job}</p>
                    </td>
                </tr>
            `;
            }
        } else {
            list.innerHTML = '<h6 style="text-align: center;">No one person.</h6>';
        }
    }

    const hidePersons = function () {
        $modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    $btnShow.addEventListener('click', showPersons);
    $btnClose.addEventListener('click', hidePersons);
});