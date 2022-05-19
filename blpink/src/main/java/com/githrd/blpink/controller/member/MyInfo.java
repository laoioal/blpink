package com.githrd.blpink.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;
import com.githrd.blpink.dao.MemberDao;
import com.githrd.blpink.vo.MemberVO;

public class MyInfo implements Blpinter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String view = "member/memberInfo";
		String id = (String) req.getSession().getAttribute("SID");
		if(id == null) {
			req.setAttribute("isRedirect", true);
			return "/blpink/loginForm.black";
		}
		MemberDao mDao = new MemberDao();
		MemberVO mVO = mDao.getIdInfo(id);
		
		req.setAttribute("INFO", mVO);
		
		return view;
	}

}
