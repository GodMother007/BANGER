import React from 'react';
import './Contact.css';
import { useNavigate } from "react-router-dom";


const ContactcheckArea = props => {
  const {values, hideConfirmation} = props;
  const navigate = useNavigate();

  return (
    <>
    <form id="contactform">
      <ul></ul>
      <table>
        <tbody>
          <tr>
            <th>お問い合わせ種別<span className="hisu">必須</span></th>
            <td id="category">{values.category}</td>
          </tr>
          <tr>
            <th>お名前<span className="hisu">必須</span></th>
            <td className="name">{values.name}</td>
          </tr>
          <tr>
            <th>メールアドレス<span className="hisu">必須</span></th>
            <td className="email">{values.email}</td>
          </tr>
          <tr>
            <th>お問い合わせ内容<span className="hisu">必須</span></th>
            <td className="text">{values.text}</td>
          </tr>
        </tbody>
      </table>
      <div id="formButton">
        <input type="button" name="__send" id="__back" value="← 戻る" onClick={hideConfirmation}/>
        <input type="button" name="__send" id="__commit" value="送信する →" onClick={() => navigate('/checked')}/>
      </div>
    </form>
    </>
  )
}

export default ContactcheckArea;
