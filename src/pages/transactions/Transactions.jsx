import React, {useState} from "react";
import HeaderTitle from "../../components/HeaderTitle";
import SectionTitle from "../../components/SectionTitle";
import CheckElement from "../../components/ui/CheckElement";
import Input from "../../components/ui/Input";
import AddButton from "../../components/ui/AddButton";
import TextButton from "../../components/ui/TextButton";
import DefaultButton from "../../components/ui/DefaultButton";
import Select from 'react-select';

const Transactions = props => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='transaction-modal'>
            <div className="transaction-modal__content">
                <HeaderTitle title={'Upload transactions'} openModal={props.openModal}/>
                <div className="page-content">
                    <div className="container">
                        <div className="page-content__wrap">
                            <SectionTitle title={'Map columns. For each field, select bank account fields'}/>
                            <form className="custom-form">
                                <div className="form-field">
                                    <CheckElement type={'checkbox'} name={'name1'}
                                                  text={'First row in file is a header row'}/>
                                </div>
                                <div className="form-field ">
                                    <div className="form-row form-row--big-indent active">
                                        <p className="form-row__title">Columns</p>
                                        <div className="form-row__content">
                                            <p className="file-name">File report_09.10.20.xls</p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-row__title">Date</p>
                                        <div className="form-row__content">
                                            <div className="form-field__input">
                                                <Select
                                                    className='custom-select'
                                                    defaultValue={selectedOption}
                                                    onChange={setSelectedOption}
                                                    options={options}
                                                    placeholde={'Select...'}
                                                    isSearchable={false}
                                                />
                                            </div>
                                            <div className="date-inputs">
                                                <Input placeholder={'Month'}/>
                                                <Input placeholder={'Day'}/>
                                                <Input placeholder={'Year'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-row__title">Description</p>
                                        <div className="form-row__content">
                                            <div className="form-field__input">
                                                <Input placeholder={'Enter description'} type={'textarea'}/>
                                                <AddButton text={'To map one more column'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <p className="form-row__title">Amount</p>
                                        <div className="form-row__content">
                                            <div className="form-field__input">
                                                <Input placeholder={'Enter Amount'}/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <div className="file-amounts">
                                        <p className="file-amounts__title">
                                            File has amounts in:
                                            <span className="tooltip">
                                            <span className="tooltip__content">
                                                   info text
                                            </span>
                                        </span>
                                        </p>
                                        <CheckElement type={'radio'} name={'file-amount'} text={'1 column: both positive and negative numbers'} checked={true}/>
                                        <CheckElement type={'radio'} name={'file-amount'} text={'2 columns: separate positive and negative numbers'}/>
                                    </div>
                                </div>
                                <div className="form-controls">
                                    <TextButton text={'Back'}/>
                                    <DefaultButton text={'Next'} modification={'next'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
const options = [
    { value: '1', label: 'value 1' },
    { value: '2', label: 'value 2' },
    { value: '3', label: 'value 3' },
    { value: '4', label: 'value 4' },
    { value: '5', label: 'value 5' },
    { value: '6', label: 'value 6' },
];
export default Transactions;