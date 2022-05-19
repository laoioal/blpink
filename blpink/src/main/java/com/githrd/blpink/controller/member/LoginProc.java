package com.githrd.blpink.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;
import com.githrd.blpink.dao.MemberDao;

public class LoginProc implements Blpinter {


	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setAttribute("isRedirect", true);
		String view = "/blpink/main.black";
		if(req.getSession().getAttribute("SID") != null) {
			
			return view;
		}
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		MemberDao mDao = new MemberDao();
		int cnt = mDao.getLogin(id, pw);
		
		if(cnt == 1) {
			req.getSession().setAttribute("SID", id);
		} else {
			view = "/blpink/loginForm.black";
		}
		
		return view;
	}

}
