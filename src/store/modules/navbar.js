import $i from '~/i18n'
const state = () => ({
  listNavbar: [
	{
		text:$i.t('body.telegram'),
		path:'/',
	}  
  ],
  listAvatar: [
  	{
  	 text: "خروج",
  	 path: "/exit" 
  	}
  ],
})

export default {
  state,
}

