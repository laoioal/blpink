package com.githrd.blpink.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;

public class LogoutProc implements Blpinter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("isRedirect", true);
		String view = "/blpink/main.black";
		if(req.getSession().getAttribute("SID") != null) {
			req.getSession().removeAttribute("SID");
		}
		return view;
	}

}
