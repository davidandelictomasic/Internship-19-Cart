import { Controller, Get, Post, Body, Patch, Param, UseGuards, Req, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from '../auth/user-auth.guard';
import { AdminAuthGuard } from '../auth/admin-auth.guard';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Order created.', type: CreateOrderDto })
  create(@Req() req, @Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(req.user.id, createOrderDto);
  }

  @Get('my')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Orders of logged-in user.' })
  findMy(@Req() req) {
    return this.ordersService.findAllByUser(req.user.id);
  }

  @Get()
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'List of all orders.', type: [CreateOrderDto] })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Order details.', type: CreateOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id/status')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Order status updated.', type: UpdateOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found.' })
  updateStatus(@Param('id', ParseIntPipe) id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }
}
