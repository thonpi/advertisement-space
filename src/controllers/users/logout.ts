import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import userService from '../../services/user';

const logout = catchAsync(async (req: Request, res: Response) => {
  try {
    await userService.logout(req.body.userId);
    res.status(200).json({
      code: 200,
      message: 'User logged-out successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      code: 500,
      message: error.message,
    });
  }
});

export default logout;
