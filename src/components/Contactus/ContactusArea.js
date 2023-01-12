import React , {useState}from 'react';
import './Contact.css';
import {useForm} from 'react-hook-form';
import ContactcheckArea from './ContactcheckArea';

const ContactusArea = () => {
  const { register, handleSubmit ,formState: { errors } ,getValues} = useForm();
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const hideConfirmation = () => setIsConfirmationVisible(false);
  const onSubmit = () => {
    setIsConfirmationVisible(true);
  }

  return (
  <>
    <div className='contactus_header'></div>
    <div className="content_space whopper">
      <div className="content_title">
        <p>お問い合わせ</p>
      </div>
      <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
          <div className='form_wrap' style={{ display: isConfirmationVisible ? "none" : "block" }}>
            <ul></ul>
            <table>
              <tbody>
                <tr>
                  <th>お問い合わせ種別<span className="hisu">必須</span></th>
                  <td id="category">
                    <input type="radio" name="category" id="tmp_0" value="取材・掲載依頼" {...register("category", { required: true })} /><label for="tmp_0">取材・掲載依頼</label><br />
                    <input type="radio" name="category" id="tmp_1" value="広告出稿について" {...register("category")}/><label for="tmp_1">広告出稿について</label><br />
                    <input type="radio" name="category" id="tmp_2" value="プレスリリースのご連絡" {...register("category")}/><label for="tmp_2">プレスリリースのご連絡</label><br />
                    <input type="radio" name="category" id="tmp_3" value="その他お問い合わせ" {...register("category")}/><label for="tmp_3">その他お問い合わせ</label><br />
                    {errors.category && <ul><li className="error cateerror">エラー: 選択されていません。</li></ul>}
                  </td>
                </tr>
                <tr>
                  <th>お名前<span className="hisu">必須</span></th>
                  <td className="name"><input type="text" name="name" id="name" size="30" {...register("name", { required: true })} />
                    {errors.name && <ul><li className="error nameerror">エラー: 入力されていません。</li></ul>}
                  </td>
                </tr>
                <tr>
                  <th>メールアドレス<span className="hisu">必須</span></th>
                  <td className="text1"><input type="email" name="email" id="email" size="40" {...register("email", { required: true })}/>
                    {errors.email && <ul><li className="error nameerror">エラー: 入力されていません。</li></ul>}
                  </td>
                  </tr>
                <tr>
                  <th>お問い合わせ内容<span className="hisu">必須</span></th>
                  <td><textarea name="text" rows="5" cols="50" id="text" {...register("text", { required: true })}></textarea>
                    {errors.text && <ul><li className="error nameerror">エラー: 入力されていません。</li></ul>}
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="formButton">
              <input type="submit" name="__send" id="__send" value="次へ →"/>
            </div>
          </div>
      </form>
      {isConfirmationVisible &&
        <ContactcheckArea
          values={getValues()}
          hideConfirmation={hideConfirmation}
        />
      }
    </div>
    <div className='contactus_footer'></div>
  </>
  )
}
export default ContactusArea;