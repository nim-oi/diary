import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class InputServlet extends HttpServlet{
    public void doGet(HttpServletRequest req,HttpServletResponse res)
    throws IOException,ServletException{

        req.setCharacterEncoding("Windows-31J");
        // String mainFile=getInitParameter("defultMain");
        req.setAttribute("mainFile","defaultMain.jsp");

        RequestDispatcher disp=req.getRequestDispatcher("/template");
        disp.forward(req,res);
    }
}